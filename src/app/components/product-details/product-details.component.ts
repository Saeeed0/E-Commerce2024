import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Iproduct } from '../../models/iproduct';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details', // Selector for this component
  templateUrl: './product-details.component.html', // HTML template file
  styleUrl: './product-details.component.css', // CSS styles
  standalone: true, // This component is independent (standalone)
})
export class ProductDetailsComponent {
  productId: number = 0; // Holds the current product ID
  product: Iproduct | null = null; // Stores the product details
  productIds: number[] = []; // Stores all product IDs
  currentIndex: number = 0; // Index of the current product in `productIds`
  private subscriptions: Subscription = new Subscription();
  constructor(
    private _ActivatedRoute: ActivatedRoute, // Helps get route parameters
    private _ApiProductsService: ApiProductsService, // Service to fetch product data
    private _Location: Location, // Allows navigation to the previous page
    private _Router: Router // Used to navigate to different pages
  ) {}

  ngOnInit(): void {
    // First, fetch all product IDs from the API
    const productsSub = this._ApiProductsService
      .getAllProducts()
      .pipe(map((products) => products.map((product) => product.id))) // Extract IDs from product list
      .subscribe({
        next: (ids) => {
          this.productIds = ids; // Store product IDs in an array

          // Subscribe to the route parameters to get the current product ID
          const routeSub = this._ActivatedRoute.paramMap.subscribe(
            (paramMap) => {
              const idParam = paramMap.get('id');
              this.productId = idParam ? Number(idParam) : 0; // Convert ID from string to number
              console.log('Current Product ID:', this.productId); // Debugging: Log the current product ID
              // let x=this.productId.toString();
              // Fetch details of the current product using the product ID
              const productSub = this._ApiProductsService
                .getProductById(this.productId)
                .subscribe({
                  next: (product) => {
                    this.product = product; // Store the retrieved product data
                  },
                });

              this.subscriptions.add(productSub);
              // Find the index of the current product ID in the `productIds` array
              this.currentIndex = this.productIds.findIndex(
                (id) => id == this.productId
              );
            }
          );
          this.subscriptions.add(routeSub);
        },
        error: (err) => console.error('Error fetching product IDs:', err), // Handle API errors
      });
    this.subscriptions.add(productsSub);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe from all observables
  }
  goToNextProduct() {
    // Check if the current product is NOT the last one
    if (this.currentIndex < this.productIds.length - 1) {
      // Navigate to the next product
      this._Router.navigateByUrl(
        `/details/${this.productIds[this.currentIndex + 1].toString()}`
      );
    }
  }

  goToPreviousProduct() {
    // Check if the current product is NOT the first one
    if (this.currentIndex > 0) {
      // Navigate to the previous product
      this._Router.navigateByUrl(
        `/details/${this.productIds[this.currentIndex - 1].toString()}`
      );
    }
  }

  goBack() {
    // Navigate back to the previous page
    this._Location.back();
  }
}

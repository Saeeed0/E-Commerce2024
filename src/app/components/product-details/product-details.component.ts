import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service.service';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  standalone: true,
})
export class ProductDetailsComponent {
  productId: number = 0; // Stores the current product ID retrieved from the URL
  product: Iproduct | null = null; // Stores the current product details
  productIds: number[] = []; // Stores an array of product IDs
  currentIndex: number = 0; // Stores the index of the current product in the productIds array

  constructor(
    private _ActivatedRoute: ActivatedRoute, // Used to get route parameters (e.g., product ID)
    private _ProductService: ProductService, // Service to fetch product data
    private _Location: Location, // Allows navigation to the previous page
    private _Router: Router // Used to navigate to different pages
  ) {}

  ngOnInit(): void {
    // This method runs when the component is initialized

    // Subscribe to route parameters to get the current product ID dynamically
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.productId = Number(paramMap.get('id')); // Convert the retrieved ID to a number
      this.product = this._ProductService.getProductById(this.productId); // Fetch product details based on ID
    });

    console.log(this.productId); // Log the current product ID to the console

    // Fetch all product IDs and store them in productIds array
    this.productIds = this._ProductService.mapProductsToIds();
  }

  goToNextProduct() {
    // Find the index of the current product ID in the productIds array
    this.currentIndex = this.productIds.findIndex((id) => id == this.productId);

    // If it's not the last product, navigate to the next product details page
    if (this.currentIndex < this.productIds.length - 1) {
      this._Router.navigateByUrl(`/details/${this.productIds[this.currentIndex + 1]}`);
    }
  }

  goToPreviousProduct() {
    // Find the index of the current product ID in the productIds array
    this.currentIndex = this.productIds.findIndex((id) => id == this.productId);

    // If it's not the first product, navigate to the previous product details page
    if (this.currentIndex > 0) {
      this._Router.navigateByUrl(`/details/${this.productIds[this.currentIndex - 1]}`);
    }
  }

  goBack() {
    // Navigate back to the previous page
    this._Location.back();
  }
}

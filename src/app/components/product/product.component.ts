import { Component } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { Iproduct } from '../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Subscription } from 'rxjs';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private subscription: Subscription = new Subscription();
  categories: Icategory[] = [];
  newProduct: Iproduct = {} as Iproduct;
  constructor(
    private _ApiProductsService: ApiProductsService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const categoriesSup = this.httpClient
      .get<Icategory[]>(`${environment.baseURL}/categories`)
      .subscribe({
        next: (categories) => {
          this.categories = categories;
        },
        error: (err) => {
          console.error('Error fetching categories:', err);
        },
      });
    this.subscription.add(categoriesSup);
  }

  addProduct() {
    this.newProduct.id = Date.now();
    this.newProduct.catId = Number(this.newProduct.catId);
    this.newProduct.imgUrl = 'https://picsum.photos/300/';
    const productSub = this._ApiProductsService
      .addProduct(this.newProduct)
      .subscribe({
        next: (response) => {
          alert('done!');
          console.log('Product added successfully:', response);
          this.router.navigateByUrl('/products');
        },
        error: (err) => {
          console.error('Error adding product:', err);
        },
      });
    this.subscription.add(productSub);
  }

  deleteProduct(id: number) {
    const deleteProductSub = this._ApiProductsService
      .removeProductById(id)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.subscription.add(deleteProductSub);
  }
  updateProduct(id: number, newProduct: Iproduct) {
    this._ApiProductsService.updateProductById(id, newProduct).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

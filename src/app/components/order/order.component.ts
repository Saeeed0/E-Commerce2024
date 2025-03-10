import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { IBoughtProduct } from '../../models/ibought-product';
@Component({
  selector: 'app-order',
  imports: [ProductsComponent, CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  remove(productId: number) {
    this.productsToBuy = this.productsToBuy.filter(
      (product) => product.id !== productId)
    console.log(this.productsToBuy);
  }
  showBoughtProducts($event: Iproduct) {
    this.recievedTotalPrice += $event.price;

    let existingProduct = this.productsToBuy.find(
      (product) => product.id === $event.id
    );

    if (existingProduct) {
      existingProduct.price += $event.price;
      existingProduct.count++;
    } else {
      const newProduct: IBoughtProduct = {
        id: $event.id,
        name: $event.name,
        price: $event.price,
        count: 1,
      };

      this.productsToBuy.push(newProduct);
    }
    // console.log(this.productsToBuy);
  }
  calcTotalPrice($event: number) {
    // this.recievedTotalPrice=$event;
  }
  catigories: Icategory[] = [];
  productsToBuy: IBoughtProduct[] = [];
  selectedCatId: number = 0;
  recievedTotalPrice: number = 0;
  constructor() {}
  ngOnInit(): void {
    this.catigories = [
      { id: 0, name: 'all' },
      { id: 1, name: 'labtop' },
      { id: 2, name: 'tv' },
      { id: 3, name: 'mobile' },
    ];
  }
}

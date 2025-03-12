import { Component, ElementRef, ViewChild } from '@angular/core';
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
  standalone: true,
})
export class OrderComponent {
  catigories: Icategory[] = [];
  productsToBuy: IBoughtProduct[] = [];
  selectedCatId: number = 0;
  recievedTotalPrice: number = 0;

  ngOnInit(): void {
    this.catigories = [
      { id: 0, name: 'all' },
      { id: 1, name: 'labtop' },
      { id: 2, name: 'tv' },
      { id: 3, name: 'mobile' },
    ];
  }

  @ViewChild(ProductsComponent) products!: ProductsComponent;
  receivedTotalPrice: number = 0;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.products.totalOrderPrice);
    // this.receivedTotalPrice=this.products
  }
  
  ///delete the product by filter it from the productsToBuy and return new arr to productsToBuy
  removeProductById(productId: number) {
    this.productsToBuy = this.productsToBuy.filter(
      (product) => product.id !== productId
    );
    console.log(this.productsToBuy);
  }

  ///listen on onBuyProdcut event if the event was fired  
  ///StorePurchasedProducts recieve the product which get bought from the child component(ProductsComponent)
  ///and push it into the productsToBy
  StorePurchasedProducts($event: Iproduct) {
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


}

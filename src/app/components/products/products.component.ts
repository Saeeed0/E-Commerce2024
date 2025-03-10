import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/hightlight.directive';
import { SquarePipe } from '../../pipes/square.pipe';
import { AddshadowDirective } from '../../directives/addshadow.directive';
import { NationalIdPipe } from '../../pipes/national-id.pipe';
import { CridetCardPipe } from '../../pipes/cridet-card.pipe';
@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    AddshadowDirective,
    SquarePipe,
    NationalIdPipe,
    CridetCardPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[] = [];
  categories: Icategory[] = [];
  totalOrderPrice: number = 0;
  @Output() onTotalOrderPriceChange: EventEmitter<number>= new EventEmitter<number>();
  @Output() onBuyProdcut: EventEmitter<Iproduct>= new EventEmitter<Iproduct>();
  @Input() recievedCatId: number = 0;
  newQuantaty: number = 0;
  myDate: Date = new Date();
  id: string = '30102112704258';
  cridetCard: string = '1234567891234567';
  filtereProducts: Iproduct[] = [];

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'dell labtop',
        catId: 1,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 20000,
        quantaty: 1,
      },
      {
        id: 200,
        name: 'lenovo labtop',
        catId: 1,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 25000,
        quantaty: 2,
      },
      {
        id: 700,
        name: 'HP labtop',
        catId: 1,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 20000,
        quantaty: 4,
      },
      {
        id: 800,
        name: 'Sumsung labtop',
        catId: 1,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 25000,
        quantaty: 0,
      },
      {
        id: 400,
        name: 'lg tv',
        catId: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 170000,
        quantaty: 1,
      },
      {
        id: 300,
        name: 'HP tv',
        catId: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 150000,
        quantaty: 2,
      },
      {
        id: 900,
        name: 'sumsung tv',
        catId: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 150000,
        quantaty: 2,
      },
      {
        id: 1000,
        name: 'lenovo tv',
        catId: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 170000,
        quantaty: 1,
      },
      {
        id: 500,
        name: 'oppo mobile',
        catId: 3,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 56000,
        quantaty: 0,
      },
      {
        id: 600,
        name: 'iphon mobile',
        catId: 3,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 78000,
        quantaty: 4,
      },
      {
        id: 1100,
        name: 'Huawi mobile',
        catId: 3,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 56000,
        quantaty: 0,
      },
      {
        id: 1200,
        name: 'Realme mobile',
        catId: 3,
        imgUrl: 'https://fakeimg.pl/300/',
        price: 78000,
        quantaty: 4,
      },
    ];
  }
  buy(product: Iproduct) {
    this.newQuantaty = --product.quantaty;
    this.totalOrderPrice +=product.price;
    this.onTotalOrderPriceChange.emit(this.totalOrderPrice);
    this.onBuyProdcut.emit(product);
  }
  trakProduct(index: number, item: Iproduct) {
    return item.id;
  }
  ngOnChanges(): void {
    this.filtration();
  }
  filtration() {
    if (this.recievedCatId == 0) this.filtereProducts = this.products;
    else
      this.filtereProducts = this.products.filter(
        (product) => product.catId == this.recievedCatId
      );
  }
}

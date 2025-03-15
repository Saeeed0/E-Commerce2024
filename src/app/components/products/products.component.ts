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
import { ProductService } from '../../services/product-service.service';
import { RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';

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
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[] = [];
  filtereProducts: Iproduct[] = [];
  categories: Icategory[] = [];
  @Input() recievedCatId: number = 0;
  totalOrderPrice: number = 0;
  @Output() onTotalOrderPriceChange: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() onBuyProdcut: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  newQuantaty: number = 0;

  myDate: Date = new Date();
  id: string = '30102112704258';
  cridetCard: string = '1234567891234567';

  // constructor(private _ProductService: ProductService) {}
  constructor(
    private _ProductService: ProductService,
    private _ApiProductsService: ApiProductsService
  ) {}

  ///
  buy(product: Iproduct) {
    this.newQuantaty = --product.quantaty;
    this.totalOrderPrice += product.price;
    this.onTotalOrderPriceChange.emit(this.totalOrderPrice);
    this.onBuyProdcut.emit(product);
  }
  trakProduct(index: number, item: Iproduct) {
    return item.id;
  }
  ngOnChanges(): void {
    // this.filtereProducts = this._ProductService.getProductsByCatId(
    //   this.recievedCatId
    // );
    this._ApiProductsService.getProductsByCatId(this.recievedCatId).subscribe({
      next: (products) => {
        console.log(products);
        this.filtereProducts = products;
      },
    });
  }
  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next: (products) => {
        this.filtereProducts = products;
        console.log(products);
      },
    });
  }
}

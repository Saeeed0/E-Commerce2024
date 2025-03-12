import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service.service';
import { Iproduct } from '../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  standalone: true,
})
export class ProductDetailsComponent {
  productId: number = 0;
  product: Iproduct | null = null;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    console.log(Number(this._ActivatedRoute.snapshot.paramMap.get('id')));

    this.product = this._ProductService.getProductById(this.productId);
  }
}

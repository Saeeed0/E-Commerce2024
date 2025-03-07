import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[] = [];
  categories:Icategory[]=[];
  totalOrderPrice:number=0;
  selectedCatId:number=3;
  newQuantaty:number=0;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products=[
      {id:100,name:'dell labtop',catId:1,imgUrl:'https://fakeimg.pl/300/',price:20000,quantaty:3},
      {id:200,name:'lenovo labtop',catId:1,imgUrl:'https://fakeimg.pl/300/',price:25000,quantaty:0},
      {id:300,name:'sumsung tv',catId:2,imgUrl:'https://fakeimg.pl/300/',price:150000,quantaty:2},
      {id:400,name:'lg tv',catId:2,imgUrl:'https://fakeimg.pl/300/',price:170000,quantaty:1},
      {id:500,name:'oppo mobile',catId:3,imgUrl:'https://fakeimg.pl/300/',price:56000,quantaty:0},
      {id:600,name:'iphon mobile',catId:3,imgUrl:'https://fakeimg.pl/300/',price:78000,quantaty:4},
    ]
    this.categories=[
      {id:1,name:'labtop'},
      {id:2,name:'tv'},
      {id:3,name:'mobile'},

    ]
    
    
  }
  // buy(price:number,count:string){
  //   this.totalOrderPrice+=Number(count)*price
  // }
  buy(product:Iproduct){
    this.newQuantaty=--product.quantaty;
  }
  trakProduct(index:number,item:Iproduct){
    return item.id;
  }
}

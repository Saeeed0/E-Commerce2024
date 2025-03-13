import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: Iproduct | null = null;
  products: Iproduct[] = [
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
  constructor() {}

  getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductById(id: number): Iproduct | null {
    const foundedPro = this.products.find((pro) => pro.id == id);
    return foundedPro ? foundedPro : null;

    // const myproduct = this.products.find((pro) => pro.id === id);
    // // this.product = myproduct==undefined?null:myproduct;
    // this.product = myproduct ?? null; // Using Nullish Coalescing Operator

    // return this.product;
  }
  getProductsByCatId(catId: number): Iproduct[] {
    if (catId === 0) return this.products;

    let filteredProducts = this.products.filter(
      (product) => product.catId == catId
    );
    return filteredProducts;
  }
  mapProductsToIds(): number[] {
    return this.products.map((pro) => pro.id);
  }
}

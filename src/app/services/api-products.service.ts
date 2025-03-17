import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(
    private httpClient: HttpClient,
    private _UserAuthService: UserAuthService
  ) {}
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.baseURL}/products`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer your-token-here',
      }),
    });
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.baseURL}/products/${id}`
    );
  }
  getProductsByCatId(catId: number): Observable<Iproduct[]> {
    if (catId == 0) {
      return this.httpClient.get<Iproduct[]>(`${environment.baseURL}/products`);
    }
    return this.httpClient.get<Iproduct[]>(
      `${environment.baseURL}/products?catId=${catId}`
    );
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.baseURL}/products`,
      JSON.stringify(product)
    );
  }
  removeProductById(id: number): Observable<Iproduct> {
    return this.httpClient.delete<Iproduct>(
      `${environment.baseURL}/products/${id}`
    );
  }
  updateProductById(id: number, product: Iproduct): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(
      `${environment.baseURL}/products/${id}`,
      product
    );
  }
  ///I want to use search for products for every input key
}

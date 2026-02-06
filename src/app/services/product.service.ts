import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../store/products/products.model';
import { catchError, delay, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/products';
  getproductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(delay(1000),
      catchError((err) => {
        return throwError(() => new Error('Failed to load products, please try again later.'));
      }),
    );
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../store/products/products.model';
import * as productActions from '../../store/products/product.action';
import * as productSelectors from '../../store/products/product.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-products',
  imports: [AsyncPipe, MatCardModule, MatButtonModule, MatProgressBarModule,JsonPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
 
  store = inject(Store);
  products$ = this.store.select(productSelectors.getProducts);
  loading$ = this.store.select(productSelectors.getLoading);
  error$ = this.store.select(productSelectors.getError);
  constructor() {
  }
  ngOnInit(): void {
    this.store.dispatch(productActions.procuct());
  }
}

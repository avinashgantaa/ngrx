import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productselectors from './store/products/product.selector';
import * as productactions from './store/products/product.action';
import { Observable } from 'rxjs';
import { Product } from './store/products/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('products');
  store = inject(Store);
  products$!: Observable<Product[]>;
  ngOnInit(): void {
    this.store.dispatch(productactions.procuct());
    this.products$.subscribe((data) => console.log(data));
  }
}

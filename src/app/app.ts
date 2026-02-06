import { Component, inject, OnInit, signal } from '@angular/core';
import { Products } from "./components/products/products";
import { Cart } from "./components/cart/cart";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Products, Cart],
})
export class App {
  protected readonly title = signal('products');

}

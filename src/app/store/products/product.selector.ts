import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
const productselector = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(productselector, (state: ProductState) => state.products);
export const getLoading = createSelector(productselector, (state: ProductState) => state.loading);
export const getError = createSelector(productselector, (state: ProductState) => state.error);

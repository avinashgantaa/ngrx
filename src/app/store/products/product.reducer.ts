import { createReducer, on } from '@ngrx/store';
import { Product } from './products.model';
import * as ProductActions from './product.action';
export interface ProductState {
  products: Product[];
  error: string| null;
  loading: boolean;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
  loading: false,
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.procuct, (state: ProductState) => {
    return { ...state, loading: true, error: null };
  }),
  on(ProductActions.procuctSuccess, (state: ProductState, { products }) => {
    return {
      ...state,
      products: products,
      loading: false,
      error: null,
    };
  }),
  on(ProductActions.procuctFailure, (state: ProductState, { error }) => {
    return {
      ...state,
      error: error,
      loading: false,
      products: [],
    };
  }),
);

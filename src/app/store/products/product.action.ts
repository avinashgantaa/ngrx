import { createAction, props } from '@ngrx/store';
import { Product } from './products.model';
export const procuct = createAction('[Product] Load Products');
export const procuctSuccess = createAction(
  '[Product] Load Products success',
  props<{ products: Product[] }>(),
);

export const procuctFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>(),
);

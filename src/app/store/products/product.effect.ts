import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import * as procuctactions from '../products/product.action';
import { catchError,exhaustMap, map,of } from 'rxjs';
@Injectable()
export class ProductEffect {
  action$ = inject(Actions);
  service = inject(ProductService);
  products$ = createEffect(() =>
    this.action$.pipe(
      ofType(procuctactions.procuct),
      exhaustMap(() => {
        return this.service.getproductsList().pipe(
          map((products) => {
            return procuctactions.procuctSuccess({products});
          }),catchError((error)=>{
            return of(procuctactions.procuctFailure({error}))
          })
        );
      }),
    ),
  );
}

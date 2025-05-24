import { tap, ignoreElements } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Action } from '@reduxjs/toolkit';
import { Observable } from 'rxjs';

import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from './cartSlice';

export const cartEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(addToCart.type, removeFromCart.type, increaseQuantity.type, decreaseQuantity.type),
    tap((action) => {
      const typed = action as { type: string };
      console.log('[Cart Epic]', typed.type, typed);
    }),
    ignoreElements(),
  );

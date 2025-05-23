import { ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import { addToCart, removeFromCart } from './cartSlice';
import { Observable } from 'rxjs';
import { Action } from '@reduxjs/toolkit';

export const cartEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(addToCart.type, removeFromCart.type),
    tap((action) => {
      console.log('[Cart Epic] Action received:', action);
    }),
    ignoreElements(),
  );

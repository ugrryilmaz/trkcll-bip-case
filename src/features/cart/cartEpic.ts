import { ofType, type Epic } from 'redux-observable';
import type { Action } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { switchMap, of } from 'rxjs';

import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from './cartSlice';
import { showSnackbar } from '@/features/ui/uiSlice';

export const cartEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    ofType(addToCart.type, removeFromCart.type, increaseQuantity.type, decreaseQuantity.type),
    switchMap((action) => {
      if (addToCart.match(action)) {
        const { name } = (action as ReturnType<typeof addToCart>).payload;
        return of(showSnackbar(`${name} sepete eklendi`));
      }

      if (removeFromCart.match(action)) {
        const { name } = (action as ReturnType<typeof removeFromCart>).payload;
        return of(showSnackbar(`${name} sepetten çıkarıldı`));
      }

      if (increaseQuantity.match(action)) {
        const { name } = (action as ReturnType<typeof increaseQuantity>).payload;
        return of(showSnackbar(`${name} adeti artırıldı`));
      }

      if (decreaseQuantity.match(action)) {
        const { name } = (action as ReturnType<typeof decreaseQuantity>).payload;
        return of(showSnackbar(`${name} adeti azaltıldı`));
      }

      return of(showSnackbar('İşlem yapıldı'));
    }),
  );

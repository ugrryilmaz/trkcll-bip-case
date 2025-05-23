// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import type { Action } from '@reduxjs/toolkit';

import productsReducer from '@/features/products/productsSlice';
import cartReducer from '@/features/cart/cartSlice';
import { rootEpic } from '@/epics/rootEpic';

export type RootState = {
  products: ReturnType<typeof productsReducer>;
  cart: ReturnType<typeof cartReducer>;
};

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
export type AppDispatch = typeof store.dispatch;

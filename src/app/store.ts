import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import type { Action } from '@reduxjs/toolkit';

import productsReducer from '@/features/products/productsSlice';
import cartReducer from '@/features/cart/cartSlice';
import uiReducer from '@/features/ui/uiSlice';
import { rootEpic } from '@/epics/rootEpic';

export type RootState = {
  products: ReturnType<typeof productsReducer>;
  cart: ReturnType<typeof cartReducer>;
  ui: ReturnType<typeof uiReducer>;
};

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);
export type AppDispatch = typeof store.dispatch;

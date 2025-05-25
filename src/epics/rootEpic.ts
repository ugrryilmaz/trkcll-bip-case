import {
  fetchProductsEpic,
  searchProductsEpic,
  filterProductsEpic,
} from '@/features/products/productsEpic';
import { combineEpics, type Epic } from 'redux-observable';
import type { Action } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export const rootEpic: Epic<Action, Action, RootState> = combineEpics(
  fetchProductsEpic,
  searchProductsEpic,
  filterProductsEpic,
);

// src/features/products/productsEpic.ts
import { ofType } from 'redux-observable';
import { of, delay, map, catchError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { Action } from '@reduxjs/toolkit';

import { fetchProducts, fetchProductsSuccess, fetchProductsError } from './productsSlice';
import type { Product } from '@/types/product';

const generateDummyProducts = (count: number): Product[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.urlPicsumPhotos(),
    category: faker.commerce.department(),
  }));
};

export const fetchProductsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(fetchProducts.type),
    switchMap(() =>
      of(generateDummyProducts(12)).pipe(
        delay(2000),
        map((products) => fetchProductsSuccess(products)),
        catchError(() => of(fetchProductsError('Ürünler alınamadı'))),
      ),
    ),
  );

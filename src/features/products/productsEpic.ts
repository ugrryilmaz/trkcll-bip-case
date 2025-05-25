import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsError,
  searchProducts,
  filterProducts,
} from './productsSlice';
import { debounceTime, switchMap, map, catchError, of, delay } from 'rxjs';
import { ofType, type Epic } from 'redux-observable';
import type { Action } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { Product } from '@/types/product';
import { faker } from '@faker-js/faker';

const generateFakeProductsFromQuery = ({
  term = '',
  category = '',
  minPrice,
  maxPrice,
}: {
  term?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}): Product[] => {
  const safeMin = minPrice ?? 0;
  const safeMax = maxPrice ?? 10000;
  /*
  fakerjs'in NaN dönmesini engellemek için default değerleri gizli şekilde "safe" parametresi ile tanımladım
  */

  return Array.from({ length: 20 }).map(() => {
    const price = Number(faker.commerce.price({ min: safeMin, max: safeMax }));

    return {
      id: faker.string.uuid(),
      name: `${term} ${faker.commerce.productName()}`,
      description: faker.commerce.productDescription(),
      price,
      image: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
      category: category || faker.commerce.department(),
    };
  });
};

// Fetch Epic
export const fetchProductsEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    ofType(fetchProducts.type),
    switchMap(() =>
      of(generateFakeProductsFromQuery({})).pipe(
        delay(500),
        map(fetchProductsSuccess),
        catchError(() => of(fetchProductsError('Ürünler yüklenemedi'))),
      ),
    ),
  );

// Search Epic
export const searchProductsEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    ofType(searchProducts.type),
    debounceTime(300),
    switchMap((action) => {
      const term = (action as ReturnType<typeof searchProducts>).payload;
      return of(generateFakeProductsFromQuery({ term })).pipe(
        delay(500),
        map(fetchProductsSuccess),
        catchError(() => of(fetchProductsError('Arama sırasında hata oluştu'))),
      );
    }),
  );

// Filter Epic
export const filterProductsEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    ofType(filterProducts.type),
    debounceTime(300),
    switchMap((action) => {
      const payload = (action as ReturnType<typeof filterProducts>).payload;

      return of(generateFakeProductsFromQuery(payload)).pipe(
        delay(500),
        map(fetchProductsSuccess),
        catchError(() => of(fetchProductsError('Filtreleme sırasında hata oluştu'))),
      );
    }),
  );

/*
3 farklı pipe yerine 3 farklı epic olarak "Advanced Hybrid" modeli tercih ettim DRY önlemek ve FP için. 
*/

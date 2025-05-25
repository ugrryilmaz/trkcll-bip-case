import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string | null;
  filters: {
    searchTerm: string;
    category: string;
    minPrice: number;
    maxPrice: number;
  };
};
const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    searchTerm: '',
    category: 'All',
    minPrice: 0,
    maxPrice: 10000,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchProductsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      state.filters.searchTerm = action.payload;
    },
    filterProducts: (
      state,
      action: PayloadAction<{
        term?: string;
        category?: string;
        minPrice?: number;
        maxPrice?: number;
      }>,
    ) => {
      const { term, category, minPrice, maxPrice } = action.payload;

      if (term !== undefined) state.filters.searchTerm = term;
      if (category !== undefined) state.filters.category = category;
      if (minPrice !== undefined) state.filters.minPrice = minPrice;
      if (maxPrice !== undefined) state.filters.maxPrice = maxPrice;
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsError,
  searchProducts,
  filterProducts,
} = productsSlice.actions;

export default productsSlice.reducer;

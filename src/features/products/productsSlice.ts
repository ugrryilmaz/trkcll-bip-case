import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
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
  },
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsError } = productsSlice.actions;

export default productsSlice.reducer;

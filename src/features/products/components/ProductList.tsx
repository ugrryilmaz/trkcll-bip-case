import { Grid, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';

import type { RootState, AppDispatch } from '@/app/store';
import { fetchProducts } from '../productsSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.products);
  const filters = useSelector((state: RootState) => state.products.filters);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredItems = useMemo(() => {
    return items.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category;
      const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
      return categoryMatch && priceMatch;
    });
  }, [items, filters]);

  if (loading) return <CircularProgress />;
  if (error) return <div>Hata: {error}</div>;

  return (
    <Grid container spacing={2}>
      {filteredItems.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

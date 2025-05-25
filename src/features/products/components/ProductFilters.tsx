import { Box, Button, ButtonGroup, Typography, TextField } from '@mui/material';
import type { AppDispatch, RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../productsSlice';
import { useState, useEffect } from 'react';

const categories = ['All', 'Electronics', 'Books', 'Shoes', 'Home'];

const ProductFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.products.filters);

  const [term, setTerm] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const handleCategoryChange = (cat: string) => {
    dispatch(
      filterProducts({
        term,
        category: cat,
        minPrice: typeof minPrice === 'number' ? minPrice : undefined,
        maxPrice: typeof maxPrice === 'number' ? maxPrice : undefined,
      }),
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(
        filterProducts({
          term,
          category: filters.category,
          minPrice: typeof minPrice === 'number' ? minPrice : undefined,
          maxPrice: typeof maxPrice === 'number' ? maxPrice : undefined,
        }),
      );
    }, 300);

    return () => clearTimeout(timeout);
  }, [term, minPrice, maxPrice, dispatch]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        size="small"
        placeholder="Ürün adı ara"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        fullWidth
      />

      <Box>
        <Typography variant="h6" gutterBottom>
          Kategori
        </Typography>
        <ButtonGroup orientation="vertical" fullWidth>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === filters.category ? 'contained' : 'outlined'}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <TextField
        size="small"
        label="Min Fiyat"
        type="number"
        placeholder="0"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))}
      />
      <TextField
        size="small"
        label="Max Fiyat"
        type="number"
        placeholder="9999"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
      />
    </Box>
  );
};

export default ProductFilters;

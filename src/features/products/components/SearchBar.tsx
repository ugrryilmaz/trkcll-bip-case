import { searchProducts } from '../productsSlice';
import { TextField, Box } from '@mui/material';
import type { AppDispatch } from '@/app/store';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [term, setTerm] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(searchProducts(term));
    }, 300); // debounce

    return () => clearTimeout(timeout);
  }, [term, dispatch]);

  return (
    <Box maxWidth={400}>
      <TextField
        size="small"
        fullWidth
        placeholder="Ürün ara..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;

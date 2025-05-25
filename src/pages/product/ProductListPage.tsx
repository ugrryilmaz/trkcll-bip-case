import ProductFilters from '@/features/products/components/ProductFilters';
import ProductList from '@/features/products/components/ProductList';
import { Grid } from '@mui/material';

const ProductPage = () => {
  return (
    <Grid container columns={12} spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <ProductFilters />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default ProductPage;

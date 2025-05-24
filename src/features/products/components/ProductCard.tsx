import { Card, CardContent, Typography, CardMedia, Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addToCart } from '@/features/cart/cartSlice';
import type { Product } from '@/types/product';
import type { AppDispatch } from '@/app/store';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia component="img" height="140" image={product.image} alt={product.name} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" mt={1}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Button variant="contained" fullWidth onClick={handleAddToCart}>
          Sepete Ekle
        </Button>
      </Stack>
    </Card>
  );
};

export default ProductCard;

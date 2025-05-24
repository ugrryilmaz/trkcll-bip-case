import { Drawer, Box, Typography, IconButton, Stack, Button, List } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '@/features/cart/components/CartItem';
import type { RootState, AppDispatch } from '@/app/store';
import { clearCart } from '@/features/cart/cartSlice';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CartDrawer = ({ open, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 320, p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Sepet</Typography>
          <IconButton onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </Stack>

        {items.length === 0 ? (
          <Typography variant="body1">Sepetiniz boş.</Typography>
        ) : (
          <>
            <List>
              {items.map((item) => (
                <CartItem
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            </List>

            <Typography variant="subtitle1" fontWeight="bold" mt={2}>
              Toplam: ₺{total.toFixed(2)}
            </Typography>

            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={() => dispatch(clearCart())}
              sx={{ mt: 2 }}
            >
              Sepeti Temizle
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;

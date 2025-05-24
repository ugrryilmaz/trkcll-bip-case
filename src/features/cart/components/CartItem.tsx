import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListItem, ListItemText, IconButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { increaseQuantity, decreaseQuantity, removeFromCart } from '../cartSlice';
import type { AppDispatch } from '@/app/store';

type Props = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

const CartItem = ({ id, name, quantity, price }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => dispatch(decreaseQuantity(id))} size="small">
            <FontAwesomeIcon icon={faMinus} />
          </IconButton>
          <IconButton onClick={() => dispatch(increaseQuantity(id))} size="small">
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
          <IconButton onClick={() => dispatch(removeFromCart(id))} size="small" color="error">
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </Stack>
      }
    >
      <ListItemText
        primary={`${name} x${quantity}`}
        secondary={`₺${(price * quantity).toFixed(2)}`}
      />
    </ListItem>
  );
};

export default CartItem;

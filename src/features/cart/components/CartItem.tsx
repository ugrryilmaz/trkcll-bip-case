import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListItem, ListItemText, IconButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartItem as Item } from '@/types/product';
import { useDispatch } from 'react-redux';

import { increaseQuantity, decreaseQuantity, removeFromCart } from '../cartSlice';
import type { AppDispatch } from '@/app/store';

type Props = {
  item: Item;
};

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => dispatch(decreaseQuantity(item))} size="small">
            <FontAwesomeIcon icon={faMinus} />
          </IconButton>
          <IconButton onClick={() => dispatch(increaseQuantity(item))} size="small">
            <FontAwesomeIcon icon={faPlus} />
          </IconButton>
          <IconButton onClick={() => dispatch(removeFromCart(item))} size="small" color="error">
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </Stack>
      }
    >
      <ListItemText
        primary={`${item.name} x${item.quantity}`}
        secondary={`₺${(item.price * item.quantity).toFixed(2)}`}
      />
    </ListItem>
  );
};

export default CartItem;

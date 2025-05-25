import { AppBar, Toolbar, Typography, IconButton, Badge, Container } from '@mui/material';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '@/features/products/components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { RootState } from '@/app/store';
import { useSelector } from 'react-redux';

type Props = {
  onCartClick?: () => void;
};

const Navbar = ({ onCartClick }: Props) => {
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">BiP Case Study</Typography>
          <IconButton color="inherit" onClick={onCartClick}>
            <Badge badgeContent={cartItemCount} color="secondary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 2, mb: 2 }}>
        <SearchBar />
      </Container>
    </>
  );
};

export default Navbar;

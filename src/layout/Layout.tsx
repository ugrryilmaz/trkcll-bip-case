import { Container } from '@mui/material';
import CartDrawer from './CartDrawer';
import { useState } from 'react';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    console.log('[Cart] Toggle drawer');
    setCartOpen(true);
  };

  const handleDrawerClose = () => {
    setCartOpen(false);
  };

  return (
    <>
      <Navbar onCartClick={handleCartClick} />
      <CartDrawer open={isCartOpen} onClose={handleDrawerClose} />
      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
};

export default Layout;

import './Home.css'

import ProductList from '../../components/ProductList/ProductList'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import { useEffect, useState } from 'react'

import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { styled } from '@mui/material'

const Home = () => {

  const drawerWidth = 250

  const { user } = useContext(UserContext)
 
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: open ? 0 : -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        })
      }),
      /**
       * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
       * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
       * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
       * proper interaction with the underlying content.
       */
      position: 'relative',
    }),
  );

  useEffect(() => {
    if(cartItems.length >0) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [cartItems])

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <div id="home">
      <Main open={open}>
        {user && <h2>Welcome, {user?.name}!</h2>}
        <ProductList setCartItems={setCartItems} />
      </Main>
      <ShoppingCart
        open={open}
        onClose={onClose}
        cartItems={cartItems}
        drawerWidth={drawerWidth}
        setCartItems={setCartItems}
      />
    </div>
  )
}

export default Home
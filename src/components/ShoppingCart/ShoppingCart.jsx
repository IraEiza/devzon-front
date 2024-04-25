import { Button, Divider, Drawer, List, ListItem, ListItemText, styled } from '@mui/material';
import React from 'react'
import CartItemList from '../CartItemList/CartItemList';
import { makePurchase } from '../../services/purchase.service';


const ShoppingCart = ({ open, drawerWidth, cartItems, setCartItems }) => {

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0)

  const handlePayment = async () => {
    const cartItemIds = cartItems.map((item) => item.id)
    console.log(cartItemIds)
    try {
      const purchase = await makePurchase(cartItemIds)
      setCartItems([])
      alert('Payment done!')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        marginTop: {sx: '56px', sm: '70px'},
        width: drawerWidth
      },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
      <h3 style={{textAlign: 'center'}}>
        Total: {(totalAmount / 100).toFixed(2)} €
      </h3>
      <Button 
          size="small" 
          variant="contained"
          color="primary"
          style={{margin: '0px 30px 30px 30px'}}
          onClick={handlePayment}
        >
          Pay!
        </Button>
        <Divider />
        <CartItemList 
          cartItems={cartItems} 
          setCartItems={setCartItems} />        
      </Drawer>
    </>
  );
}

export default ShoppingCart
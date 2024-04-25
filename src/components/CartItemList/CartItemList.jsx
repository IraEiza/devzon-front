import './CartItemList.css'
import CartItem from '../CartItem/CartItem'

const CartItemList = ({cartItems, setCartItems}) => {

  const displayCartItems = () => {
    const formattedCartItems = cartItems.map((product) => {
      return (
        <CartItem 
          key={product.id}
          product={product}
          setCartItems={setCartItems}
        />
      )
    })

    return formattedCartItems
  }


  return (
    <div id="cart-item-list">
      { displayCartItems() }
    </div>
  )
}

export default CartItemList
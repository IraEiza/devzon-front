import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import './CartItem.css'

const CartItem = ({product, setCartItems}) => {

  const handleRemoveItem = () => {
    setCartItems((itemsInCart) => {
      const filteredItems = itemsInCart.filter((itemInCart) => {
        return itemInCart.name !== product.name
      })
      return filteredItems
    })
  }

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
        />
      </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div" >
            {product.name}
          </Typography>
        </CardContent>
        <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography gutterBottom variant="h6" component="div" >
          {(product.price / 100).toFixed(2)} €
        </Typography>
        <Button 
          size="small" 
          variant="contained"  
          style={{backgroundColor: 'red'}}
          onClick={handleRemoveItem}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
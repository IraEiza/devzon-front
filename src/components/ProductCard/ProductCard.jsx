import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';

export default function ProductCard({product, setCartItems}) {
  console.log(product)
  const handleAddToCart = () => {
    setCartItems((addedItems) => [...addedItems, {...product}])
  }

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
      </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" >
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {product.description}
          </Typography>
        </CardContent>
        <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
        <Typography gutterBottom variant="h6" component="div" >
          {(product.price/100).toFixed(2)} €
        </Typography>
        <Button 
          size="small" 
          variant="contained"  
          color="primary"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
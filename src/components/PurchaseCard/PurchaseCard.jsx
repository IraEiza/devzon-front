import { Divider } from '@mui/material';
import './PurchaseCard.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PurchaseCard = ({ purchase }) => {

  console.log(purchase)

  const displayBroughProducts = () => {
    return purchase.products.map((product) => {
      return (
        <Card key={product.id} sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={product.image}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {product.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {product.description}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
        </Card>
      )
    })
  }

  return (
    <div id="purchase-ard">
      <Card sx={{margin: 2}}>
        <Typography component="div" variant="h5" margin={2} color={'primary'}>
          Total: {(purchase.total / 100).toFixed(2)} €
        </Typography>
        {displayBroughProducts()}
      </Card>
    </div>
  )
}

export default PurchaseCard
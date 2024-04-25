import './ProductList.css'

import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../services/product.service'
import { useEffect, useState } from 'react'

const ProductList = ({setCartItems}) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()

  }, [])

  return ( 
    <div style={{margin: '25px', display: "flex", flexWrap: 'wrap', gap: '15px', justifyContent: "center"}}>{
      products.map((product) => {
        return (
          <ProductCard
            key={product?.id}
            product={product}
            setCartItems={setCartItems}
          />    
        )
      })
    }</div>
  )
}

export default ProductList
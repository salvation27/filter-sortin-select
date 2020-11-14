import React from 'react'
import Product from './Product'

export default function Products({products}) {
  console.log(products);
  return (
    <div>
      {
        products.map(product=>(
          <Product key={product.id} product={product} />
        ))
      }
      
    </div>
  )
}

import React from 'react'

export default function Product({product}) {
const {title,cat,price,desc} = product
// console.log(product);
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{desc}</p>
  <p>{cat}</p>
  <strong className='price'>{price}</strong>
    </div>
  )
}

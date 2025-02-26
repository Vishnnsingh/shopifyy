import React from 'react'
import Style from "../Product/Product.module.css"
import CategoryList from '../../../Components/CategoryList/CategoryList'
import ProductList from '../../../Components/ProductList/ProductList'
const Product = () => {
  return (
    <div className={Style.container}>
    <CategoryList />
    <ProductList />
  </div>
  )
}

export default Product

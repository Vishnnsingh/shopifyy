import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./ProductList.module.css";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className={style.productList}>
      <h2 className={style.productTitle}>Product Titles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className={style.productItem}>
            <Link to={`/product/${product.id}`} className={style.productLink}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

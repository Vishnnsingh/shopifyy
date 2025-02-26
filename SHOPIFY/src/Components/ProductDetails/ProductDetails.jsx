import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../redux/productSlice";
import { useParams } from "react-router-dom";
import Style from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className={Style.container}>
      <h1 className={Style.category}>
  {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Category
</h1>

      <div className={Style.card}>
        <img src={product.image} alt={product.title} className={Style.image} />
        <div className={Style.details}>
          <h2 className={Style.productName}>
            <span>Product Name</span>
            {product.title}
          </h2>
          <p className={Style.productPrice}>
            <span>Product Price</span>${product.price}
          </p>
          <p className={Style.productDescription}>
            <span>Product Description</span>
            {product.description}
          </p>
          <p className={Style.productRating}>
            <span>Product Rating</span>
            {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

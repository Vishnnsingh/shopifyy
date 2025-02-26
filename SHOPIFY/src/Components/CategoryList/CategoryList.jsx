import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "../../redux/productSlice";
import style from "./CategoryList.module.css";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts("electronics")); // Default category
  }, [dispatch]);

  return (
    <div className={style.categoryList}>
      <h2 className={style.categoryTitle}>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={style.categoryItem}>
            <button
              className={style.categoryButton}
              onClick={() => dispatch(fetchProducts(category))}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

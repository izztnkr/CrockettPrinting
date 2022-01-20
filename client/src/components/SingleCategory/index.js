import React, { useState } from "react";
import ProductOptionsCard from "./ProductOptionsCard";
import Wrapper from "./Wrapper";
import { QUERY_SINGLE_CATEGORY } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function ProductOptions() {
  const params = useParams();
  console.log(params);

  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    variables: { categoryId: params.id },
  });
  const category = data?.category || [];
  console.log(category);

  //ICEBOX ITEM >>>>>>>
  // Create a method 'removeProductOptions()' that takes in 'id' and filters through 'SingleCategoryList'
  // Update the state with the new productOptions list.
  // const removeProductOptions = id => {
  //   const newList = productOptionsList.filter(productOptions => productOptions.id !== id);
  //   setProductOptionsList(newList);
  // };
  //ICEBOX ITEM ^^^^^^^^^

  return (
    <Wrapper>
      <h1 className="title">Product Options List</h1>
      {/* Map through 'category.options' and render a 'ProductOptions Card' for each category */}
      {/* Pass in the 'removeProductOptions()' method and each property of a productOptions (ICEBOX ITEM)*/}
      {category.options &&
        category.options.map((category) => (
          <ProductOptionsCard
            id={category.id}
            key={category.id}
            name={category.name}
            size={category.size}
            price={category.price}
          />
        ))}
    </Wrapper>
  );
}

export default ProductOptions;

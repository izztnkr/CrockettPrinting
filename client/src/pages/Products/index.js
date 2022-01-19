import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Wrapper from './Wrapper';
import { QUERY_CATEGORIES} from '../../utils/queries';
import { useQuery } from '@apollo/client';


function Products() {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  // Create a method 'removeProduct()' that takes in 'id' and filters through 'productsList'
  // Update the state with the new products list.(ICEBOX ITEM)
  //  const removeProduct = id => {
  //   const newList = productsList.filter(product => product.id !== id);
  //   setProductsList(newList);
  // };

  return (
    <Wrapper>
      <h1 className="title">Explore All Print Products</h1>
      {/* Map through 'Categories' and render a 'OptionsCard' for each category */}
      {/* Pass in the 'removeProduct()' method and each property of a product (ICEBOX ITEM) */}
      {categories.map(category => (
        <ProductCard
          // removeProduct={removeProduct}
          id={category.id}
          name={category.name}
          image={category.image}          
        />
      ))}
    </Wrapper>
  );
}

export default Products;

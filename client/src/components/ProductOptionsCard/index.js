// Import 'useState' Hook from React
import React, { useState } from 'react';
import ProductOptionsCard from './ProductOptionsCard';
import Wrapper from './Wrapper';
import productOptions from './productOptions.json';
// import './App.css';

function ProductOptions() {
  // Using useState, declare a new state variable 'productOptionsList' and set it to the 'productOptions' array from 'DB'
  const [productOptionsList, setProductOptionsList] = useState(productOptions);

  // Create a method 'removeProductOptions()' that takes in 'id' and filters through 'productOptionsList'
  // Update the state with the new productOptions list.
  const removeProductOptions = id => {
    const newList = productOptionsList.filter(productOptions => productOptions.id !== id);
    setProductOptionsList(newList);
  };

  return (
    <Wrapper>
      <h1 className="title">Product Options List</h1>
      {/* Map through 'productOptionsList' and render a 'ProductOptions Card' for each product */}
      {/* Pass in the 'removeProductOptions()' method and each property of a productOptions */}
      {productOptionsList.map(productOptions => (
        <ProductOptionsCard
          removeProductOptions={removeProductOptions}
          id={productOptions.id}
          key={productOptions.id}
          name={productOptions.name}
          image={productOptions.image}
          cost={productOptions.cost}
          unit={productOptions.unit}
          description={productOptions.description}
        />
      ))}
    </Wrapper>
  );
}

export default ProductOptions;

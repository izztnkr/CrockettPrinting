// Import 'useState' Hook from React
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Wrapper from './Wrapper';
import products from './products.json';
// import './App.css';

function Products() {
  // Using useState, declare a new state variable 'productsList' and set it to the 'products' array from 'DB'
  const [productsList, setProductsList] = useState(products);

  // Create a method 'removeProduct()' that takes in 'id' and filters through 'productsList'
  // Update the state with the new products list.
  const removeProduct = id => {
    const newList = productsList.filter(product => product.id !== id);
    setProductsList(newList);
  };

  return (
    <Wrapper>
      <h1 className="title">Explore All Print Products</h1>
      {/* Map through 'prodcutsList' and render a 'ProductCard' for each product */}
      {/* Pass in the 'removeProduct()' method and each property of a product */}
      {productsList.map(product => (
        <ProductCard
          removeProduct={removeProduct}
          id={product.id}
          key={product.id}
          name={product.name}
          image={product.image}
          cost={product.cost}
          unit={product.unit}
          description={product.description}
        />
      ))}
    </Wrapper>
  );
}

export default Products;

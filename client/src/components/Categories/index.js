// Import 'useState' Hook from React
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import Wrapper from './Wrapper';
import categories from './categories.json';
// import './App.css';

function Categories() {
  // Using useState, declare a new state variable 'productsList' and set it to the 'products' array from 'DB'
  const [categoriesList, setCategoriesList] = useState(categories);

  // Create a method 'removeProduct()' that takes in 'id' and filters through 'productsList'
  // Update the state with the new products list.
  const removeCategory = id => {
    const newList = categoriesList.filter(product => product.id !== id);
    setCategoriesList(newList);
  };

  return (
    <Wrapper>
      <h1 className="title">Categories List</h1>
      {/* Map through 'prodcutsList' and render a 'ProductCard' for each product */}
      {/* Pass in the 'removeProduct()' method and each property of a product */}
      {categoriesList.map(product => (
        <CategoryCard
          removeCategory={removeCategory}
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

export default Categories;

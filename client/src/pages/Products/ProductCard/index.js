import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from '@apollo/client';
import "./style.css";
//this is the ProductCard used to render the different print Categories offered by the business
function ProductCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong> {props.name}</strong>
          </li>
          <li className="link">
            <Link to={`/products/${props.id}`}>
              Explore all {props.name} products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from '@apollo/client';
import "./style.css";

function ProductCard(props) {
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
            <Link to={`/products/${props.namee}`}>
              Explore all {props.name} products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductCard;

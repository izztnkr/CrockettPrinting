import React from "react";
// import { useQuery } from '@apollo/client';
import "./style.css";

// This is the productOptionsCard component of the app. This is what will help us render the specific option per print category upon the on click of the link prompting the user in the Products page/product card//
function ProductOptionsCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong> {props.name}</strong>
          </li>
          <li className="link">
            <p>Size:{props.size} </p>
          </li>
          <li>
            <p>Price/unit: {props.price}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductOptionsCard;

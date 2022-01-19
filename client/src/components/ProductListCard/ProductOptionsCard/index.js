import React from "react";
// import { useQuery } from '@apollo/client';
import "./style.css";

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

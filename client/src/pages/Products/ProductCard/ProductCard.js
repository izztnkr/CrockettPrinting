import React from 'react';
// import { useQuery } from '@apollo/client';


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
          <li className='link'>
              <p>Unit:</p>
          </li>
          <li>s
          <p>Price/unit:</p>
          </li>
          <li>
          <p>Description:</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductCard;

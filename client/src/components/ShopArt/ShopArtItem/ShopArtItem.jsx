import React from 'react';
import './ShopArtItem.css'; // Ensure the path to the CSS file is correct
import { Link } from 'react-router-dom';

export default function ShopArtItem({
  _id,
  title,
  price,
  imageUrl,
}) {
  return (
    <div className="card mb-4 product-wap rounded-0">
      <div className="card rounded-0">
        <img
          className="card-img rounded-0 img-fluid"
          src={imageUrl}
          alt={title}
        />
        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
          <ul className="list-unstyled">
            <li>
              <Link 
                className="btn btn-success text-white mt-2"
                to={`/art/${_id}`}
              >
                <i className="far fa-eye" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <Link to={`/art/${_id}`} className="h3 text-decoration-none"> {title} </Link>
        <ul className="list-unstyled d-flex justify-content-center mb-1">
          {/* Additional content could go here */}
        </ul>
        <p className="text-center mb-0">{`$${price}`}</p>
      </div>
    </div>
  );
}

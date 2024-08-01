import React, { useState, useEffect } from 'react';
import '../ShopArtItem/ShopArtItem.css';
import { Link } from 'react-router-dom';

export default function ShopArtItem({
  _id,
  title,
  price,
  imageUrl,
}) {
  const [rating, setRating] = useState(0); // State to track the current rating
  const [hoverRating, setHoverRating] = useState(0); // State to track the rating being hovered

  useEffect(() => {
    // Retrieve rating from local storage
    const userRatings = JSON.parse(localStorage.getItem('userRatings')) || {};
    setRating(userRatings[_id] || 0);
  }, [_id]);

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleRatingClick = (value) => {
    const newRating = value;
    
    // Update local storage with the new rating
    const userRatings = JSON.parse(localStorage.getItem('userRatings')) || {};
    userRatings[_id] = newRating;
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
    
    setRating(newRating);
  };

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
            <li>
              <Link
                className="btn btn-success text-white mt-2"
                to={`/cart`}
              >
                <i className="fas fa-cart-plus" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <Link to={`/art/${_id}`} className="h3 text-decoration-none"> {title} </Link>
        <ul className="list-unstyled d-flex justify-content-center mb-1">
          <li>
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`fa fa-star ${star <= (hoverRating || rating) ? 'text-warning' : 'text-muted'}`}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleRatingClick(star)}
              />
            ))}
          </li>
        </ul>
        <p className="text-center mb-0">{`$${price}`}</p>
        <p className="text-center mb-0">Your Rating: {rating} {rating ? '⭐' : ''}</p> {/* Display the user's rating */}
      </div>
    </div>
  );
}

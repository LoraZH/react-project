import React, { useState } from 'react';
import '../ShopArtItem/ShopArtItem.css';
import { Link } from 'react-router-dom';

export default function ShopArtItem({
  _id,
  title,
  price,
  imageUrl,
}) {
  const [likes, setLikes] = useState(0); // State to track the number of likes
  const [liked, setLiked] = useState(false); // State to track if the item is liked

  // Handle like button click
  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1); // Decrease the like count if already liked
    } else {
      setLikes(likes + 1); // Increase the like count if not liked
    }
    setLiked(!liked); // Toggle the liked state
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
              <button
                className={`btn ${liked ? 'btn-danger' : 'btn-success'} text-white`}
                onClick={handleLikeClick}
                aria-label="Like"
              >
                <i className={`far fa-heart ${liked ? 'fa-heart' : 'fa-heart-o'}`} />
              </button>
            </li>
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
         
        </ul>
        <p className="text-center mb-0">{`$${price}`}</p>
        <p className="text-center mb-0">Likes: {likes}</p> {/* Display the number of likes */}
      </div>
    </div>
  );
}

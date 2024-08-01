import '../ShopArtItem/ShopArtItem.css';
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
              <a
                className="btn btn-success text-white"
                href="/"
              >
                <i className="far fa-heart" />
              </a>
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
          <li>
            <i className="text-warning fa fa-star" />
            <i className="text-warning fa fa-star" />
            <i className="text-warning fa fa-star" />
            <i className="text-muted fa fa-star" />
            <i className="text-muted fa fa-star" />
          </li>
        </ul>
        <p className="text-center mb-0">{`$${price}`}</p>
      </div>
    </div>
  );
}

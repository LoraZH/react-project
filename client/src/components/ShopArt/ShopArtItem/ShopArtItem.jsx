import '../ShopArtItem/ShopArtItem.css';
import { Link } from 'react-router-dom';
export default function ShopArtItem({
        _id,
        title,
        price,
        imageUrl,
}) {
  return (
    <>
      <div className="card rounded-0">
        <img className="card-img rounded-0 img-fluid" src={imageUrl} />
      </div>
      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
        <ul className="list-unstyled">

          <i className="far fa-heart">
            <li>
              <Link className="btn btn-success text-white mt-2" to={`/art/${_id}`}>
                <i className="far fa-eye"></i>
              </Link>
              <i className="far fa-eye"></i>
            </li>
            <i className="far fa-eye">
              <li>
                <a className="btn btn-success text-white mt-2" href="/shop-single">
                  <i className="fas fa-cart-plus"></i>
                </a>
                <i className="fas fa-cart-plus"></i>
              </li>
              <i className="fas fa-cart-plus"></i>
            </i>
          </i>
        </ul>
        <i className="far fa-heart">
          <i className="far fa-eye">
            <i className="fas fa-cart-plus"></i>
          </i>
        </i>
      </div>
      <i className="far fa-heart">
        <i className="far fa-eye">
          <i className="fas fa-cart-plus">
            <div className="card-body">
              <Link to={`/art/${_id}`} className="h3 text-decoration-none">
                {title}
              </Link>
              <p className="text-center mb-0">{`$${price}`}</p>
            </div>
            
          </i>
        </i>
      </i>
    </>

  )
}
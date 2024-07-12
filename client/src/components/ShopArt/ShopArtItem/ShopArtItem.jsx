import '../ShopArtItem/ShopArtItem.css';
import { Link } from 'react-router-dom';
export default function ShopArtItem({
  _id,
  title,
  price,
  imageUrl,
}) {
  return (
    <div className="container py-5">
      <div className="row">

        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={imageUrl}
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
            </div>
            {/* <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_02.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_03.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_04.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_05.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_06.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_07.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_08.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 product-wap rounded-0">
            <div className="card rounded-0">
              <img
                className="card-img rounded-0 img-fluid"
                src="assets/img/shop_09.jpg"
              />
              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-success text-white"
                      href="shop-single.html"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="far fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-success text-white mt-2"
                      href="shop-single.html"
                    >
                      <i className="fas fa-cart-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <a href="shop-single.html" className="h3 text-decoration-none">
                Oupidatat non
              </a>
              <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>M/L/X/XL</li>
                <li className="pt-2">
                  <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                  <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                </li>
              </ul>
              <ul className="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-warning fa fa-star" />
                  <i className="text-muted fa fa-star" />
                  <i className="text-muted fa fa-star" />
                </li>
              </ul>
              <p className="text-center mb-0">$250.00</p>
            </div>
          </div>
        </div> */}
          </div>

        </div>
      </div>
    </div>


  )
}
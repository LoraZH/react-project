import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <>
        <footer className="bg-dark" id="tempaltemo_footer">
  <div className="p-4">
    <div className="row">
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-success border-bottom pb-3 border-light logo">
           Lora's Art Store
        </h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li>
            <i className="fas fa-map-marker-alt fa-fw" />
            4000, Plovdiv, Bulgaria
          </li>
          <li>
            <i className="fa fa-phone fa-fw" />
            <a className="text-decoration-none" href="tel:+359 887 569 234">
              +359 887 569 234
            </a>
          </li>
          <li>
            <i className="fa fa-envelope fa-fw" />
            <a className="text-decoration-none" href="mailto:info@company.com">
              loraArtStore@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-light border-bottom pb-3 border-light">
          Products
        </h2>
        <ul className="list-unstyled text-light footer-link-list">
        <li>
            <Link className="text-decoration-none" to="shop">
              Shop Art
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-light border-bottom pb-3 border-light">
          Further Info
        </h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li>
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="row text-light mb-4">
      <div className="col-12 mb-3">
        <div className="w-100 my-3 border-top border-light" />
      </div>
      <div className="col-auto me-auto">
        <ul className="list-inline text-left footer-icons">
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              href="http://facebook.com/"
            >
              <i className="fab fa-facebook-f fa-lg fa-fw" />
            </a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <i className="fab fa-instagram fa-lg fa-fw" />
            </a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter fa-lg fa-fw" />
            </a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none"
              target="_blank"
              href="https://www.linkedin.com/"
            >
              <i className="fab fa-linkedin fa-lg fa-fw" />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
  <div className="w-100 bg-black py-3">
    <div className="p-4">
      <div className="row pt-2">
        <div className="col-12">
          <p className="text-left text-light">
              Designed by{" Lora Zhelezarova"}
          
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}
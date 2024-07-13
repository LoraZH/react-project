import { Link } from "react-router-dom";

export default function Categories(){
    return(
<>
<div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
              <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  to="/shop"
                >
                  All
                 
                </Link>
                <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  to="/painting"
                >
                  Painting
                 
                </Link>
                <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  to="/sculpture"
                >
                  Sculpture
                 
                </Link>
                <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  to="/photography"
                >
                  Photography
                 
                </Link>
                <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  to="digitalArt"
                >
                  Digital Art
                 
                </Link>
                <Link
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  to="/other"
                >
                  Other
                 
                </Link>
              </li>
            </ul>
          </div>
</>
    )
}
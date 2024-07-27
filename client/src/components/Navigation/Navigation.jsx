import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Navigation() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="p-2 d-flex justify-content-between align-items-center w-100">
                <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                    <img src="/img/artstore.png" alt="Lora's Art Store" />
                </a>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatemo_main_nav"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
                    id="templatemo_main_nav"
                >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <ul className="nav navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    Shop Art
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            {isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sell">
                                            Sell Your Art
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                            {!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <div className="d-flex align-items-center">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobileSearch"
                                        placeholder="Search ..."
                                    />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search" />
                                    </div>
                                </div>
                            </div>
                            <Link className="nav-icon position-relative text-decoration-none mx-2" to="/cart">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                    7
                                </span>
                            </Link>
                            {isAuthenticated && (
                                <Link className="nav-link d-flex align-items-center mx-2" to="/profile">
                                    <i className="fa fa-fw fa-user text-dark mr-1" />
                                    <span className="username-text">
                                        {username}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

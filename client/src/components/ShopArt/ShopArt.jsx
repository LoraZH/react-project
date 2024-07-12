import { useEffect, useState } from "react"
import * as ArtServices from '../../services/ArtServices'
import ShopArtItem from "./ShopArtItem/ShopArtItem";

export default function Shop() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    ArtServices.getAll()
      .then(result => setArt(result))
  }, []);
  console.log(art);
  return (
    <>
      <div className=" p-4 py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Gender
                  <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                </a>
                <ul className="collapse show list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Women
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Sale
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-3">
                <a
                  className="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="#"
                >
                  Product
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                </a>
                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Bag
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sweather
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sunglass
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="row">
            {art.map(art => (
                <ShopArtItem key={art._id}{...art} />
              ))}
            </div>
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Start Brands */}
      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                {/*Controls*/}
                <div className="col-1 align-self-center">
                  <a
                    className="h1"
                    href="#multi-item-example"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <i className="text-light fas fa-chevron-left" />
                  </a>
                </div>
                {/*End Controls*/}
                {/*Carousel Wrapper*/}
                <div className="col">
                  <div
                    className="carousel slide carousel-multi-item pt-2 pt-md-0"
                    id="multi-item-example"
                    data-bs-ride="carousel"
                  >
                    {/*Slides*/}
                    <div
                      className="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      {/*First slide*/}
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_01.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_02.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_03.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_04.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*End First slide*/}
                      {/*Second slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_01.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_02.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_03.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_04.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*End Second slide*/}
                      {/*Third slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_01.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_02.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_03.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#">
                              <img
                                className="img-fluid brand-img"
                                src="/img/brand_04.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*End Third slide*/}
                    </div>
                    {/*End Slides*/}
                  </div>
                </div>
                {/*End Carousel Wrapper*/}
                {/*Controls*/}
                <div className="col-1 align-self-center">
                  <a
                    className="h1"
                    href="#multi-item-example"
                    role="button"
                    data-bs-slide="next"
                  >
                    <i className="text-light fas fa-chevron-right" />
                  </a>
                </div>
                {/*End Controls*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Brands */}
      
      

    </>
  )
}
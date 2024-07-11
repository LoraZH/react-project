import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as ArtService from '../../services/ArtServices'

export default function ArtDetails(){
    const [art, setArt] = useState({});
    const {artId} = useParams();

    useEffect(() => {
        ArtService.getOne()
        .then(setArt);
    },[artId]);

    return(
        <section className="bg-light">
  <div className="container pb-5">
    <div className="row">
      <div className="col-lg-5 mt-5">
        <div className="card mb-3">
          <img
            className="card-img img-fluid"
            src={art.imageUrl}
            alt="Card image cap"
            id="product-detail"
          />
        </div>
        <div className="row">
          {/*Start Controls*/}
          <div className="col-1 align-self-center">
            <a href="#multi-item-example" role="button" data-bs-slide="prev">
              <i className="text-dark fas fa-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
          </div>
          {/*End Controls*/}
          {/*Start Carousel Wrapper*/}
          <div
            id="multi-item-example"
            className="col-10 carousel slide carousel-multi-item"
            data-bs-ride="carousel"
          >
            {/*Start Slides*/}
            <div className="carousel-inner product-links-wap" role="listbox">
              {/*First slide*/}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_01.jpg"
                        alt="Product Image 1"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_02.jpg"
                        alt="Product Image 2"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_03.jpg"
                        alt="Product Image 3"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/*/.First slide*/}
              {/*Second slide*/}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_04.jpg"
                        alt="Product Image 4"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_05.jpg"
                        alt="Product Image 5"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_06.jpg"
                        alt="Product Image 6"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/*/.Second slide*/}
              {/*Third slide*/}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_07.jpg"
                        alt="Product Image 7"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_08.jpg"
                        alt="Product Image 8"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#">
                      <img
                        className="card-img img-fluid"
                        src="/img/product_single_09.jpg"
                        alt="Product Image 9"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/*/.Third slide*/}
            </div>
            {/*End Slides*/}
          </div>
          {/*End Carousel Wrapper*/}
          {/*Start Controls*/}
          <div className="col-1 align-self-center">
            <a href="#multi-item-example" role="button" data-bs-slide="next">
              <i className="text-dark fas fa-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/*End Controls*/}
        </div>
      </div>
      {/* col end */}
      <div className="col-lg-7 mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="h2">{art.title}</h1>
            <p className="h3 py-2">${art.price}</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <h6>Author:</h6>
              </li>
              <li className="list-inline-item">
                <p className="text-muted">
                  <strong>to add owner</strong>
                </p>
              </li>
            </ul>
            <h6>Categories:</h6>
            <p>
              {art.categories}
            </p>
            <h6>Description:</h6>
            <p>
              {art.description}
            </p>
            <form action="" method="GET">
              <input
                type="hidden"
                name="product-title"
                defaultValue="Activewear"
              />
              
              <div className="row pb-3">
                <div className="col d-grid">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    name="submit"
                    value="buy"
                  >
                    Buy
                  </button>
                </div>
                <div className="col d-grid">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    name="submit"
                    value="addtocard"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}
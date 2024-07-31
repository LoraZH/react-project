import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as ArtService from '../../services/ArtServices'
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function ArtDetails() {
    const { email, userId } = useContext(AuthContext);
    const [art, setArt] = useState({});
    const { artId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (artId) {
            ArtService.getOne(artId).then(setArt);
        }
    }, [artId]);

    const isOwner = userId === art._ownerId;

   
    return (
        <section className="bg-light">
            <div className="pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img
                                className="card-img img-fluid"
                                src={art.imageUrl}
                                alt="Card image cap"
                                id={art._id}
                            />
                        </div>
                    </div>
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
                                            <strong>{ }</strong>
                                        </p>
                                    </li>
                                </ul>
                                <h6>Categories:</h6>
                                <p>
                                    {art.category}
                                </p>
                                <h6>Description:</h6>
                                <p>
                                    {art.description}
                                </p>

                                {isOwner && (
                                 <div className="row pb-3">
                                 <div className="col d-grid">
                                     <Link to={pathToUrl(Path.EditArt, {artId})} className="btn btn-success btn-lg same-size-button">
                                         Edit
                                     </Link>
                                 </div>
                                 <div className="col d-grid">
                                 <Link to={`art/:artId/delete`} className="btn btn-success btn-lg same-size-button">
                                         Delete
                                     </Link>
                                 </div>
                             </div>
                             
                                )}

                                {!isOwner && (
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
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
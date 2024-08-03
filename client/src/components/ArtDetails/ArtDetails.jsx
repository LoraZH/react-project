import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as ArtService from '../../services/ArtServices';
import AuthContext from "../../contexts/authContext";
import * as commentService from "../../services/commentService";

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

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${art.title}`);

        if (hasConfirmed) {
            await ArtService.remove(artId);
            navigate('/shop');
        }
    };

    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            artId,
            formData.get('username'),
            formData.get('comment'),
        );
        console.log('new comment')
    }

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
                                        <h6>Author: </h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted">
                                            <strong>{art.username}</strong>
                                        </p>
                                    </li>
                                </ul>
                                <h6>Categories:</h6>
                                <p>{art.category}</p>
                                <h6>Description:</h6>
                                <p>{art.description}</p>

                                {isOwner && (
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Link to={`/edit-art/${artId}`} className="btn btn-success btn-lg same-size-button">
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="col d-grid">
                                            <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                                        </div>
                                    </div>
                                )}

                                <div className="comment-section">
                                    <h1>Add Comment</h1>
                                    <form className="comment-form" onSubmit={addCommentHandler}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username:</label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="form-control"
                                                name="username"
                                                placeholder="Enter your username"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="comment">Comment:</label>
                                            <textarea
                                                id="comment"
                                                className="form-control"
                                                name="comment"
                                                rows="4"
                                                placeholder="Enter your comment"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="add-comment-button">
                                            Add Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

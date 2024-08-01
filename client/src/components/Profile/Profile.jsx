import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Profile() {
    const { username } = useContext(AuthContext);

   
    return (
        <section className="bg-light">
            <div className="py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <img src="/img/profile.jpg" alt="profilePic" className="rounded-circle w-50 img-fluid border" />
                        <p className="mt-3">{username}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

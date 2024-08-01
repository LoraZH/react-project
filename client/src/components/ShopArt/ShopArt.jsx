import { useEffect, useState } from "react";
import * as ArtServices from '../../services/ArtServices';
import ShopArtItem from "./ShopArtItem/ShopArtItem";
import Categories from "../Categories/Categories";

export default function Shop() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    ArtServices.getAll()
      .then(result => setArt(result))
  }, []);

  return (
    <>
      <div className="p-4 py-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {art.map(artItem => (
                <div className="col-md-4 mb-4" key={artItem._id}>
                  <ShopArtItem {...artItem} />
                </div>
              ))}
            </div>
            <div className="row">
              <ul className="pagination pagination-lg justify-content-end">
                {/* Pagination items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

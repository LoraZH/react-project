import { useEffect, useState } from "react"
import * as ArtServices from '../../services/ArtServices'
import ShopArtItem from "./ShopArtItem/ShopArtItem";
import Categories from "../Categories/Categories";

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
          <Categories />
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
   
      
      

    </>
  )
}
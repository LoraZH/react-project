import { useNavigate } from 'react-router-dom';

import '../SellYourArt/SellYourArt.css'
import * as ArtService from '../../services/ArtServices';

export default function SellYourArt(){
  const navigate = useNavigate();

  const sellArtHandler = async (e) => {
    e.preventDefault();

    const artData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await ArtService.sell(artData);
        navigate('/shop');
    } catch (err) {
        // Error notification
        console.log(err);
    }

}
    return(
          <section id="sell-art-page" className="auth">
            <form id="sell-art" onSubmit={sellArtHandler}>
              <div className="container">
                <h1>Sell Your Art</h1>
                <label htmlFor="title">Art Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter art title..." required />
      
                <label htmlFor="category">Category:</label>
                <select id="category" name="category" required>
                  <option value="painting">Painting</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="photography">Photography</option>
                  <option value="digital">Digital Art</option>
                  <option value="other">Other</option>
                </select>
      
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" placeholder="Price in USD" required />
      
                <label htmlFor="art-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" placeholder="Describe your art" rows={5} required></textarea>
      
                <input className="btn submit" type="submit" value="Post Art for Sale" />
              </div>
            </form>
          </section>
        )
      };
//     )
// }


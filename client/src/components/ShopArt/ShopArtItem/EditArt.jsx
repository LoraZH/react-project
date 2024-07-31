import { useNavigate, useParams } from 'react-router-dom';
import '../../SellYourArt/SellYourArt.css';
import * as ArtService from '../../../services/ArtServices'
import useForm from '../../../hooks/useForm';
import { useEffect, useState } from 'react';
export default function EditArt() {
  const navigate = useNavigate();
  const { artId } = useParams();
  const [art, setArt] = useState({
    title: '',
    category: '',
    price: '',
    imageUrl: '',
    description: ''
  });

  useEffect(() => {
    ArtService.getOne(artId)
      .then(result => {
        setArt(result);
      })
      .catch(error => {
        console.error('Error fetching art:', error);
      });
  }, [artId]);

  const updateArtHandler = async (e) => {
    try {
      await ArtService.edit(artId, values);
      navigate('/shop');
    } catch (err) {
      console.error(err);
    }
  };

  const { values, onChange, onSubmit } = useForm(updateArtHandler, art);

  return (
    <section id="sell-art-page" className="auth">
      <form id="sell-art" onSubmit={onSubmit}>
        <label htmlFor="title">Art Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={onChange}
          placeholder="Enter art title..."
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={values.category}
          onChange={onChange}
          required
        >
          <option value="painting">Painting</option>
          <option value="sculpture">Sculpture</option>
          <option value="photography">Photography</option>
          <option value="digital">Digital Art</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={values.price}
          onChange={onChange}
          placeholder="Price in USD"
          required
        />

        <label htmlFor="art-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={values.imageUrl}
          onChange={onChange}
          placeholder="Upload a photo..."
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={values.description}
          onChange={onChange}
          id="description"
          placeholder="Describe your art"
          rows={5}
          required
        ></textarea>

        <input className="btn submit" type="submit" value="Edit Your Art " />
      </form>
    </section>
  );
}

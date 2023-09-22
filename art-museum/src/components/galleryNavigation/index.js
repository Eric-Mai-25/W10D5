import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {
  const galleryLinks = galleries.map((gallery) => {
    return (
      <NavLink key={gallery.id}  to={`/galleries/${gallery.id}`}>
        <p >{gallery.name}</p>
      </NavLink>
    );
  });
  return (
    <>
      <nav>
        <NavLink exact to="/">
          <h1>Galleries</h1>
        </NavLink>
        {galleryLinks}
      </nav>
    </>
  );
};

export default GalleryNavigation;

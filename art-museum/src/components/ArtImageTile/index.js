// console.log(gallery.objects[0].images[0].baseimageurl)\
import { Link, useParams } from "react-router-dom";


const ArtImageTile = ({ art, galleryId }) => {
  return (
    <>
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl}></img>
    </Link>
    </>
  );
};

export default ArtImageTile;

import { Link } from "react-router-dom";

const ArtDescription = ({gallery, galleryId}) => {
    console.log(gallery);
    return (
        <> 
            <a href={gallery.url}>View {}</a>
            <Link to={`/galleries/${galleryId}`}>
                <button>Back to {gallery.name}</button>
            </Link>
        </>
    );
}

export default ArtDescription;
import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) =>  {
    const { galleryId } = useParams();

    const gallery = galleries.find((gallery) => {
        return gallery.gallerynumber === galleryId;
    });

    return (
        <>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
        </>
    );
}

export default GalleryView;
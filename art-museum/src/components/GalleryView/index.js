import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import { Route } from "react-router-dom";
import ArtDescription from "../ArtDescription";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const gallery = galleries.find((gallery) => {
        return gallery.gallerynumber === galleryId;
    });

    const artWorks = Object.values(gallery.objects).map((art) => {
        if (art.images[0]) {
            return <ArtImageTile key={art.id} galleryId={galleryId} art={art} />;
        }
    });

    return (
        <>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
            <Route exact path={`/galleries/${galleryId}`}>
                {artWorks}
            </Route>
            <Route exact path={`/galleries/${galleryId}/art/:artId`}>
                <ArtDescription gallery={gallery} galleryId={galleryId}/>
            </Route>
        </>
    );
};

export default GalleryView;

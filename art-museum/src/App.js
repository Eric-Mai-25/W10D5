import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/galleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </>
  );
}

export default App;

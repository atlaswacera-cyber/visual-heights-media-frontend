import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MediaGrid from "../MediaGrid/MediaGrid.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import NothingFound from "../NothingFound/NothingFound.jsx";
import { searchPhotos, searchVideos } from "../../utils/PexelsApi.js";
import "./InspirationPage.css";

function InspirationPage() {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(keyword) {
    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const [photos, videos] = await Promise.all([
        searchPhotos(keyword),
        searchVideos(keyword),
      ]);
      setMedia([...photos, ...videos]);
    } catch (searchError) {
      setMedia([]);
      setError(searchError.message || "Unable to load inspiration right now.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="inspiration-page">
      <div className="inspiration-page__content">
        <p className="inspiration-page__eyebrow">Visual Research</p>
        <h1 className="inspiration-page__title">
          Find a direction for your next story.
        </h1>
        <p className="inspiration-page__text">
          Search photo and video references for creative inspiration. These
          results are separate from Visual Heights Media portfolio work.
        </p>

        <SearchForm onSearch={handleSearch} />

        {isLoading && <Preloader />}
        {!isLoading && error && (
          <p className="inspiration-page__error" role="alert">
            {error}
          </p>
        )}
        {!isLoading && !error && hasSearched && media.length === 0 && (
          <NothingFound />
        )}
        {!isLoading && !error && media.length > 0 && <MediaGrid items={media} />}
      </div>
    </main>
  );
}

export default InspirationPage;

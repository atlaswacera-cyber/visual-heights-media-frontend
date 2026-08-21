import SearchForm from "../SearchForm/SearchForm.jsx";
import MediaGrid from "../MediaGrid/MediaGrid.jsx";
import "./InspirationPage.css";

const sampleMedia = [
  {
    id: "sample-1",
    type: "Photo",
    creator: "Sample creator",
    title: "Cinematic light study",
  },
  {
    id: "sample-2",
    type: "Video",
    creator: "Sample creator",
    title: "Movement and community",
  },
  {
    id: "sample-3",
    type: "Photo",
    creator: "Sample creator",
    title: "City texture at night",
  },
];

function InspirationPage() {
  function handleSearch(keyword) {
    console.log("Search submitted:", keyword);
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

        <MediaGrid items={sampleMedia} />
      </div>
    </main>
  );
}

export default InspirationPage;

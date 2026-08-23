import MediaCard from "../MediaCard/MediaCard.jsx";
import "./MediaGrid.css";

function MediaGrid({ items, savedMedia = [], onSave, onRemove, onLoginClick }) {
  const savedIds = savedMedia.map((item) => item.id);

  return (
    <section className="media-grid" aria-label="Inspiration results">
      {items.map((item) => (
        <MediaCard
          key={item.id}
          item={item}
          isSaved={savedIds.includes(item.id)}
          onSave={onSave}
          onRemove={onRemove}
          onLoginClick={onLoginClick}
        />
      ))}
    </section>
  );
}

export default MediaGrid;

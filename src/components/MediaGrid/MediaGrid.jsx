import MediaCard from "../MediaCard/MediaCard.jsx";
import "./MediaGrid.css";

function MediaGrid({ items, savedMedia = [], onSave, onRemove, onLoginClick }) {
  const savedIds = savedMedia.map((item) => item.id);

  return (
    <ul className="media-grid" aria-label="Inspiration results">
      {items.map((item) => (
        <li className="media-grid__item" key={item.id}>
          <MediaCard
            item={item}
            isSaved={savedIds.includes(item.id)}
            onSave={onSave}
            onRemove={onRemove}
            onLoginClick={onLoginClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default MediaGrid;

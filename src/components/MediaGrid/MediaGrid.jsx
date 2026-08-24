import MediaCard from "../MediaCard/MediaCard.jsx";
import "./MediaGrid.css";

function MediaGrid({ items }) {
  return (
    <section className="media-grid" aria-label="Inspiration results">
      {items.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default MediaGrid;

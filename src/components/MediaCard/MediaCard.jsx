import "./MediaCard.css";

function MediaCard({ item }) {
  return (
    <article className="media-card">
      <div className="media-card__visual">
        <span>{item.type}</span>
      </div>

      <div className="media-card__content">
        <p className="media-card__creator">By {item.creator}</p>
        <h3 className="media-card__title">{item.title}</h3>
      </div>
    </article>
  );
}

export default MediaCard;

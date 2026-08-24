import "./MediaCard.css";

function MediaCard({ item }) {
  const title = item.alt || "Pexels media";

  return (
    <article className="media-card">
      <div className="media-card__visual">
        <img src={item.image} alt={item.alt} />
        <span>{item.type}</span>
      </div>

      <div className="media-card__content">
        <p className="media-card__creator">By {item.creator}</p>
        <h3 className="media-card__title">{title}</h3>
      </div>
    </article>
  );
}

export default MediaCard;

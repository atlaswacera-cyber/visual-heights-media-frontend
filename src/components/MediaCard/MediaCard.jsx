import "./MediaCard.css";

function MediaCard({ item, isSaved, onSave, onRemove, onLoginClick }) {
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
        {onSave && (
          <button
            className="media-card__action"
            type="button"
            onClick={() => onSave(item)}
            disabled={isSaved}
          >
            {isSaved ? "Saved" : "Save inspiration"}
          </button>
        )}
        {!onSave && onLoginClick && (
          <button
            className="media-card__action"
            type="button"
            onClick={onLoginClick}
          >
            Login to save
          </button>
        )}
        {onRemove && (
          <button
            className="media-card__action"
            type="button"
            onClick={() => onRemove(item.id)}
          >
            Remove saved inspiration
          </button>
        )}
      </div>
    </article>
  );
}

export default MediaCard;

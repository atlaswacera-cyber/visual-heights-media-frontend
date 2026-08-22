import "./PortfolioCard.css";

function PortfolioCard({ project }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card__image-placeholder" aria-hidden="true">
        {project.number}
      </div>

      <div className="portfolio-card__content">
        <p className="portfolio-card__category">{project.category}</p>
        <h3 className="portfolio-card__title">{project.title}</h3>
        <p className="portfolio-card__text">{project.text}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;

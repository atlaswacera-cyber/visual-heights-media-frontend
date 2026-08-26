import PortfolioCard from "../PortfolioCard/PortfolioCard.jsx";
import "./Portfolio.css";

const projects = [
  {
    number: "01",
    category: "Documentary",
    title: "Culture in Focus",
    text: "A placeholder for a future documentary project centered on community and cultural memory.",
  },
  {
    number: "02",
    category: "Portraiture",
    title: "Chicago Voices",
    text: "A placeholder for portrait-based visual storytelling featuring artists and local leaders.",
  },
  {
    number: "03",
    category: "Creative Production",
    title: "Global Perspective",
    text: "A placeholder for future work connecting people, ideas, and communities across borders.",
  },
];

function Portfolio() {
  return (
    <section
      className="portfolio"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="portfolio__content">
        <p className="portfolio__eyebrow">Selected Work</p>
        <h2 className="portfolio__title" id="portfolio-title">
          Built around real people and meaningful places.
        </h2>

        <p className="portfolio__note">
          Project imagery will be added as Visual Heights Media work becomes
          available for publication.
        </p>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <PortfolioCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

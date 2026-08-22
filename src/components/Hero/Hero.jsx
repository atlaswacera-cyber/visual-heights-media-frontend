import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">A Media Production Company</p>

        <h1 className="hero__title">
          Stories with depth.
          <span className="hero__title-accent"> Visuals with purpose.</span>
        </h1>

        <p className="hero__text">
          Visual Heights Media creates documentary films, photography, and
          visual stories that preserve culture, inspire connection, and elevate
          meaningful voices.
        </p>

        <a className="hero__button" href="#portfolio">
          View selected work
        </a>
      </div>
    </section>
  );
}

export default Hero;

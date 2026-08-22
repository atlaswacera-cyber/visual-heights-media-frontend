import "./Services.css";

const services = [
  {
    title: "Documentary Film",
    text: "Cinematic nonfiction stories rooted in people, place, and purpose.",
  },
  {
    title: "Photography",
    text: "Portraits and visual campaigns that hold emotion, identity, and detail.",
  },
  {
    title: "Creative Production",
    text: "Thoughtful visual direction for artists, organizations, and communities.",
  },
];

function Services() {
  return (
    <section className="services" aria-labelledby="services-title">
      <div className="services__content">
        <p className="services__eyebrow">What We Create</p>
        <h2 className="services__title" id="services-title">
          Visual storytelling for work that matters.
        </h2>

        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.title}>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

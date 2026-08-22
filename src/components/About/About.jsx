import "./About.css";

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__content">
        <p className="about__eyebrow">Mission Statement</p>

        <h2 className="about__title" id="about-title">
          Stories that educate, inspire, and connect generations.
        </h2>

        <p className="about__text">
          Visual Heights Media is a documentary and visual storytelling company
          dedicated to capturing the people, cultures, ideas, and communities
          shaping our world.
        </p>

        <p className="about__text">
          Through cinematic filmmaking, photography, and digital media, we
          preserve authentic stories that educate, inspire, and connect
          generations.
        </p>

        <p className="about__text">
          Based in Chicago with a global vision, our work focuses on artists,
          educators, cultural leaders, and underserved communities whose voices
          deserve to be documented and remembered.
        </p>

        <div className="about__filmmaker">
          <p className="about__eyebrow">About the Filmmaker</p>
          <h3 className="about__name">Atlas A. Wacera</h3>
          <p className="about__text">
            Atlas is a documentary filmmaker, cinematographer, and the founder
            of Visual Heights Media. His work explores culture, education,
            community, and identity through cinematic nonfiction storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

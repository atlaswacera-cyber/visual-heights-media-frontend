import "./App.css";

import Header from "./components/Header/Header.jsx";

import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__content">
        <Hero />
        <Services />
        <Portfolio />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";

function App() {
  const [lastSearch, setLastSearch] = useState("");

  function handleSearch(keyword) {
    setLastSearch(keyword);
  }

  return (
    <div className="app">
      <Header />

      <main className="app__content">
        <section className="app__intro">
          <p className="app__eyebrow">A Media Production Company</p>
          <h1 className="app__title">Visual Heights Media</h1>
          <p className="app__text">
            Crafted visuals for stories meant to be remembered.
          </p>
        </section>

        <SearchForm onSearch={handleSearch} />

        {lastSearch && (
          <p className="app__search-result" aria-live="polite">
            Inspiration search ready for: {lastSearch}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;

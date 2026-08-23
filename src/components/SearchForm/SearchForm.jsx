import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, isLoading }) {
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      setMessage("Please enter a keyword.");
      return;
    }

    setMessage("");
    onSearch(trimmedKeyword);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} aria-busy={isLoading}>
      <label className="search-form__label" htmlFor="inspiration-search">
        Search visual inspiration
      </label>

      <div className="search-form__controls">
        <input
          className="search-form__input"
          id="inspiration-search"
          name="keyword"
          type="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Try cinematic lighting, portraits, or city nights"
          disabled={isLoading}
        />

        <button className="search-form__button" type="submit" disabled={isLoading}>
          {isLoading ? "Searching…" : "Search"}
        </button>
      </div>

      {message && (
        <p className="search-form__message" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}

export default SearchForm;

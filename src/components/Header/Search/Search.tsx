import React, { useState } from "react";
import "./Search.scss";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchQuery);
  };

  return (
    <form className="search-bar__form" onSubmit={handleSubmit}>
      <label htmlFor="searchBar">
        <input
          type="text"
          id="searchBar"
          placeholder="O Que Você Busca?"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-bar__input"
        />
      </label>
      <button className="search-bar__btn" type="submit">
        Buscar
      </button>
    </form>
  );
};

export { Search };

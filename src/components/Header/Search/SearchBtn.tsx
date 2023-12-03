import React, { useState } from "react";
import "./Search.scss";
import searchIcon from "../../../assets/icon-busca.png";
import { Search } from "./Search";

const SearchBtn = () => {
  const [oppenSearch, setOppenSearch] = useState(false);
  const handleSearch = (event: any) => {
    event.preventDefault();
    !oppenSearch ? setOppenSearch(true) : setOppenSearch(false);
  };
  return (
    <>
      <button
        className="search-mobile__icon"
        aria-label="busca"
        onClick={handleSearch}
      >
        <img src={searchIcon} alt="Search" />
      </button>
      {oppenSearch && (
        <div className="search-mobile__drawer">
          <Search />
        </div>
      )}
    </>
  );
};

export { SearchBtn };

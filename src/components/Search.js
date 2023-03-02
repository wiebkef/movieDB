import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import SearchIcon from "../images/search.svg";

function Search({ handleSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    handleSearch(query);
  };
  return (
    <div className="ccontainer">
      <div className="search">
        <form onSubmit={handleSubmit} className="search-content">
          <input
            placeholder="Search for recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit" className="bg-transparent">
            <img src={SearchIcon} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;

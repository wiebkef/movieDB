import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import NewMovie from "./components/NewMovie";
import UpdateMovie from "./components/UpdateMovie";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Movies />
            </>
          }
        />
        <Route
          path="/search/:query"
          element={<SearchResults query={query} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/newMovie" element={<NewMovie />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

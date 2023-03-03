import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movies from "./Movies";
import axios from "axios";

function MoviesGenre() {
    const { genre } = useParams();
    const [movies, setMovies] = useState([]);

      useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/genre/${genre}`)
        .then((response) => {
          setMovies(response.data);
          console.log(response.data);
        });
      }, [genre]);

      return (
        <div>
          <h2>{genre} Movies</h2>
            <div className="movies">
        {movies.map((movie) => (
          <Movies key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
    
    export default MoviesGenre;
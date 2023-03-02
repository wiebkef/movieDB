import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
console.log(query);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/search?query=${query}`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, [query]);

  return (
    <div className="App container-lg text-center my-5">
      <div className="row text-center gx-3 gy-3">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <Link to={`/movie/${movie.id}`} className="title">
              <div
                className="card text-light text-center m-auto"
                style={{
                  minWidth: "18rem",
                  backgroundColor: "#555",
                }}
              >
                <img
                  src={movie.imgurl}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      minHeight: "50px",
                      maxHeight: "50px",
                      overflow: "hidden",
                    }}
                  >
                    {movie.title}
                  </h5>
                  <div className="row text-center my-3">
                    <div className="col text-start">{movie.rating} / 10</div>
                    <div className="col text-end">by {movie.poster}</div>
                  </div>
                  <p
                    className="card-text"
                    style={{
                      minHeight: "120px",
                      maxHeight: "120px",
                      overflow: "hidden",
                    }}
                  >
                    {movie.description}
                  </p>
                  <button className="btn btn-warning border-0">
                    See movie
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

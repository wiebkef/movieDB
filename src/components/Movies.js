import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const contentful = require("contentful");

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    /*  const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      environment: process.env.REACT_APP_ENVIRONMENT_ID,
    });
    client
      .getEntries()
      .then((res) => setMovies(res.items))
      .catch((err) => console.log(err)); */
  }, []);

  return (
    <div className="App container-lg text-center mb-5">
      <div className="row text-center gx-3 gy-3">
        {movies.map((movie) => (
          <div key={movie.sys.id} className="col">
            <Link to={`/movie/${movie.sys.id}`} className="title">
              <div
                className="card text-light text-center m-auto"
                style={{
                  minWidth: "18rem",
                  backgroundColor: "#555",
                }}
              >
                <img
                  src={movie.fields.titleImage.fields.file.url}
                  className="card-img-top"
                  alt={movie.fields.title}
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
                    {movie.fields.title}
                  </h5>
                  <div className="row text-center my-3">
                    <div className="col text-start">
                      {movie.fields.rating} stars
                    </div>
                    <div className="col text-end">by {movie.fields.author}</div>
                  </div>
                  <p
                    className="card-text"
                    style={{
                      minHeight: "120px",
                      maxHeight: "120px",
                      overflow: "hidden",
                    }}
                  >
                    {movie.fields.shortDescription}
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

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/details.css";
export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}api/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="App container mt-5 mb-5 text-start">
      <div className="row">
        <div id={movie.id} className="col">
          <div className="card text-light mb-3 dark-purple-bg">
            <div className="row g-0">
              <div className="col-md-4 bg-dark rounded-start">
                <img
                  src={movie.imgurl}
                  className="img-fluid rounded-start"
                  alt={movie.title}
                  style={{ minWidth: "100%" }}
                />
              </div>
              <div className="col-md-8 p-3">
                <div className="card-body">
                  <h1 className="card-title light-blue-text">{movie.title}</h1>
                  <p className="card-text my-3 light-blue-text">
                    {movie.description}
                  </p>
                  <div className="row text-center mt-4 p-2 light-purple-bg text-dark rounded-top">
                    <div className="col-md-4 text-start">
                      {movie.rating} / 10 stars
                    </div>
                    <div className="col-md-8 text-start">{movie.category}</div>
                  </div>
                  <div className="row text-center mb-4 p-2 light-blue-bg text-dark rounded-bottom">
                    <div className="col-md-4 text-start">{movie.director}</div>
                    <div className="col-md-4 text-start">{movie.year}</div>
                    <div className="col-md-4 text-start">
                      {movie.poster}'s favourite
                    </div>
                  </div>
                  <div className="row text-center my-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/details.css";
import { Button } from "react-bootstrap";
import Comments from "./Comments";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleRemove = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };

  return (
    <div className="App container mt-5 mb-5 text-start">
      <div className="row">
        <div className="col">
          <div className="card text-light mb-3 dark-purple-bg">
            <div className="row g-0">
              <div className="col-md-4 dark-purple-bg rounded-start">
                <img
                  src={movie.imgurl}
                  className="img-fluid rounded-start text-dark"
                  alt={movie.title}
                  style={{ minWidth: "100%" }}
                />
              </div>
              <div className="col-md-8 p-3">
                <div className="card-body">
                  <h1 className="card-title">{movie.title}</h1>
                  <p className="card-text my-3 light-purple-text">
                    {movie.description}
                  </p>
                  <div className="row text-center mt-4 p-2 bg-light text-dark rounded-top">
                    <div className="col-md-4 text-start">
                      {movie.rating} / 10
                      <div className="d-inline-flex p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-8 text-start">
                      {movie.poster}'s favourite
                    </div>
                  </div>
                  <div className="row text-center mb-4 p-2 light-purple-bg text-dark rounded-bottom">
                    <div className="d-flex">
                      <div className="flex-fill text-start">
                        Director: <strong className="">{movie.director}</strong>
                      </div>
                      <div className="flex-fill text-start">
                        from <strong>{movie.year}</strong>
                      </div>
                      <div className="flex-fill text-start">{movie.genre}</div>
                    </div>
                  </div>
                  <div className="row gap-2 justify-content-end">
                    <Link
                      to={`/update-movie/${id}`}
                      className="col-3 btn btn-outline-light"
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={handleRemove}
                      variant="outline-light"
                      className="col-3 "
                    >
                      Remove
                    </Button>
                  </div>
                  <div className="mt-5">
                    <Comments />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

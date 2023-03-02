import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({ title: "", director: "", year: 0, rating: 0, poster: "", description: "", imgurl: "" });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
    axios
      .put(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`, movie)
      .then((res) => navigate("/movies"))
      .catch((e) => console.log(e));
  } else {
    form.reportValidity();
  }
};

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            value={movie.year}
            name="year"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            value={movie.rating}
            name="rating"
            step="0.1"
            min="0"
            max="10"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="poster">Poster URL:</label>
          <input
            type="url"
            name="poster"
            value={movie.poster}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={movie.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="imgurl">Image URL:</label>
          <input
            type="url"
            name="imgurl"
            value={movie.imgurl}
            onChange={handleChange}
            required
          />
        </div>
        <button>Update Movie</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
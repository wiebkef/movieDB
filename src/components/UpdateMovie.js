import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    year: 0,
    genre: "",
    rating: 0,
    poster: "",
    description: "",
    imgurl: "",
  });

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
        .then((res) => navigate(`/movie/${id}`))
        .catch((e) => console.log(e));
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className="container col-4 text-center my-5">
      <h1 className="text-light">Update a movie</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2 bg-dark">
          <Form.Control
            type="text"
            placeholder="Movie Title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            autoFocus={true}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Director"
            name="director"
            value={movie.director}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="number"
            placeholder="Year of Release (YYYY)"
            min="1900"
            max="2023"
            name="year"
            value={movie.year}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Select
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            aria-label="Select the genre"
          >
            <option>Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Cartoons">Cartoons</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="number"
            placeholder="Rating: 1-10 Stars"
            min="1"
            max="10"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className=" m-2">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "100px" }}
            name="description"
            value={movie.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Movie poster URL"
            name="imgurl"
            value={movie.imgurl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Your name"
            name="poster"
            value={movie.poster}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Update movie
        </Button>
      </Form>
    </div>
  );
}

export default UpdateMovie;

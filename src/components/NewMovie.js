import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`, movie)
      .then((res) => navigate(`/movie/${res.id}`))
      .catch((e) => console.log(e));
  };

  return (
    <div className="container col-4 text-center my-5">
      <h1 className="text-light">Add a new movie</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Movie Title"
            name="title"
            onChange={handleChange}
            autoFocus={true}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Director"
            name="director"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="number"
            placeholder="Year of Release (YYYY)"
            min="1900"
            max="2023"
            name="year"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Select
            name="genre"
            onChange={handleChange}
            aria-label="Select the genre"
            required
          >
            <option value="">Genre</option>
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
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className=" m-2">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "100px" }}
            name="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="url"
            placeholder="Movie poster URL"
            name="imgurl"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Your name"
            name="poster"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="outline-light" type="submit">
          Add movie
        </Button>
      </Form>
    </div>
  );
};

export default NewMovie;

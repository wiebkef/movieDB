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
      .then((res) => navigate("/"))
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
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Director"
            name="director"
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
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="number"
            placeholder="Rating: 1-10 Stars"
            min="1"
            max="10"
            name="rating"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className=" m-2">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "100px" }}
            name="description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Movie poster URL"
            name="imgurl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="text"
            placeholder="Your name"
            name="poster"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Add movie
        </Button>
      </Form>
    </div>
  );
};

export default NewMovie;

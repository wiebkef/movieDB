import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewMovie = () => {
  /*
    This component should display a form to add a new movie.
    - create state to keep track of form input change
    - on submit create axios POST request to the backend (/api/movies)
    - if the request was successful navigate back to the movies page
  */

  return (
    <div className="container col-4 text-center my-5">
      <h1 className="text-light">Add a new movie</h1>
      <Form>
        <Form.Group className="m-2">
          <Form.Control type="text" placeholder="Movie Title" />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control type="text" placeholder="Director" />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="number"
            placeholder="Year of Release YYYY"
            min="1900"
            max="2050"
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control
            type="number"
            placeholder="Rating: 1-10 Stars"
            min="1"
            max="10"
          />
        </Form.Group>
        <Form.Group className=" m-2">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control type="text" placeholder="Poster URL" />
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Control type="text" placeholder="Your Username" />
        </Form.Group>

        <Button variant="light" type="submit">
          Add movie
        </Button>
      </Form>
    </div>
  );
};

export default NewMovie;

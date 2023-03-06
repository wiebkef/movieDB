import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}/comments`,
        comment
      )
      .then((res) => {
        console.log([...res.data, ...comments]);
        setComments([...res.data, ...comments]);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Comments</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Your name"
            name="author"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Control
            as="textarea"
            placeholder="What do you think about the movie?
"
            style={{ height: "100px" }}
            name="comment"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="outline-light" type="submit">
          Comment
        </Button>
      </Form>
      {comments.length > 0 && (
        <>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div className="row text-center mt-4 p-2 bg-light text-dark rounded-top">
                  <div className="col-md-4 text-start">{comment.author}</div>
                  <div className="col-md-8 text-end">
                    {new Date(comment.created).toLocaleDateString()}{" "}
                    {new Date(comment.created).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
                <div className="row text-center mb-4 p-2 light-purple-bg text-dark rounded-bottom">
                  <p className="text-start">{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Comments;

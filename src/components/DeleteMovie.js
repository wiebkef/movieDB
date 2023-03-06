import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const DeleteMovie = ({ show, handleRemove, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className="text-light border-0"
          style={{ backgroundColor: "#555" }}
        >
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="text-light border-0"
          style={{ backgroundColor: "#555" }}
        >
          The movie will be permanently deleted.
        </Modal.Body>
        <Modal.Footer
          className="text-light border-0"
          style={{ backgroundColor: "#555" }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={handleRemove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteMovie;

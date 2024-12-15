import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form Submitted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>User Information</h4>
       <p>{props.user}</p>
       <p>{props.email}</p>
       <p>{props.mobile}</p>
       <img
  src={props.imageUrl}
  alt="Prabas"
  style={{ width: "30vh", height: "auto", marginTop: "10px" }}
/>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

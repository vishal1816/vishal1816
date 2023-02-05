import Button from "react-bootstrap/lib/Button";
import Modal from "react-bootstrap/lib/Modal";
import React, { useState } from "react";

function Codenia(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <a href="https://codeniatechnologies.com/">Visit</a>
      </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        style={{
          color: "white",
          fontSize: 18,
          background: "darkblue",
        }}
        variant="danger"
        onClick={() => setModalShow(true)}
      >
        click
      </Button>

      <Codenia show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;

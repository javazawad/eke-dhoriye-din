import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { uid } from "uid";

export const ItemModal = ({
  title = "Create Post",
  item = { id: uid(), contactInfo: {}, status: 1 },
  modalShow,
  setModalShow,
  submitPost,
}) => {
  const submitTask = () => {};

  return (
    <Modal
      show={modalShow}
      onHide={() => {
        setModalShow(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemForm
          thisitem={item}
          submitPost={submitPost}
          setModalShow={setModalShow}
        />
      </Modal.Body>
    </Modal>
  );
};

const ItemForm = ({ thisitem, setModalShow, submitPost }) => {
  const [item, setItem] = useState(thisitem);
  const reset = (e) => {
    console.log(item);
    setItem(thisitem);
    console.log(thisitem);
  };
  const submit = (e) => {
    console.log(item);
    e.preventDefault();
    submitPost(item);
    reset();
    setModalShow(false);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="enter name"
          value={item.name}
          onChange={(e) => {
            // setTask({ ...task, title: e.target.value });
            setItem({ ...item, name: e.target.value });
          }}
        />
        <Form.Label>Age</Form.Label>
        <Form.Control
          placeholder="enter age"
          value={item.age}
          onChange={(e) => {
            // setTask({ ...task, title: e.target.value });
            setItem({ ...item, age: e.target.value });
          }}
        />
        <Form.Label>Gender</Form.Label>
        <Form.Select
          onChange={(e) => {
            // setTask({ ...task, priority: e.target.value });
            setItem({ ...item, gender: e.target.value });
          }}
          value={item.gender}
          size="sm"
        >
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </Form.Select>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          placeholder="add image url"
          value={item.image}
          onChange={(e) => {
            // setTask({ ...task, title: e.target.value });
            setItem({ ...item, image: e.target.value });
          }}
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="Provide description"
          value={item.description}
          onChange={(e) => {
            // setTask({ ...task, title: e.target.value });
            setItem({ ...item, description: e.target.value });
          }}
        />
        <Form.Label>Last Seen</Form.Label>
        <Form.Control
          placeholder="Last seen location"
          value={item.lastSeen}
          onChange={(e) => {
            // setTask({ ...task, title: e.target.value });
            setItem({ ...item, lastSeen: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Contact Info</Form.Label>
        <Row>
          <Col>
            <Form.Control
              placeholder="Address"
              value={item.contactInfo.address}
              onChange={(e) => {
                // setTask({ ...task, title: e.target.value });
                setItem({
                  ...item,
                  contactInfo: { ...item.contactInfo, address: e.target.value },
                });
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Mobile"
              value={item.contactInfo.mobile}
              onChange={(e) => {
                // setTask({ ...task, title: e.target.value });
                setItem({
                  ...item,
                  contactInfo: { ...item.contactInfo, mobile: e.target.value },
                });
              }}
            />
          </Col>
        </Row>
        {/* <Form.Control
          placeholder="Enter Contact info"
          value={item.contactInfo}
          onChange={(e) => {
            // setTask({ ...task, title: e.target.value });
            setItem({ ...item, contactInfo: e.target.value });
          }}
        /> */}
        <Form.Label>Status</Form.Label>
        <Form.Select
          onChange={(e) => {
            // updateTask({ ...task, priority: e.target.value });
          }}
          value={item.status}
        >
          <option value={1}>Active</option>
          <option value={2}>Closed</option>
          <option value={3}>Failed</option>
        </Form.Select>
      </Form.Group>
      <Modal.Footer>
        <Button variant="secondary" onClick={reset}>
          Clear
        </Button>
        <Button variant="primary" onClick={submit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

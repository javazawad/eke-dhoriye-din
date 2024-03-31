import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { mockData } from "../api/mockData";
import { ItemCard } from "./ItemCard";
import { addPost, currentUser, getPosts } from "../api";
import { Modal } from "react-bootstrap";
import { ItemModal } from "../itemPage/itemModal";

export const ItemView = ({ thisUser }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      let filter = {};
      if (thisUser) {
        filter = {
          postedBy: currentUser,
        };
      }
      try {
        const data = await getPosts(filter);
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };
    console.log("fetching all posts");
    fetchItems();
  }, []);

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Row xs sm className="align-items-center">
          {/* //TODO manage this */}

          <Col>
            <div className="p-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Search"
                className="mb-3"
              >
                <Form.Control
                  placeholder="Search for a task"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </FloatingLabel>
            </div>
          </Col>
          <Col>
            <div class="d-flex justify-content-end">
              <Button
                size="lg"
                onClick={() => {
                  console.log("btn");
                  console.log(modalShow);
                  setModalShow(true);
                }}
              >
                Add Post
              </Button>
            </div>
          </Col>
          {/* <Col className="d-flex justify-content-end ">
            <DropdownButton
              variant="secondary"
              title="Filter"
              onClick={(e) => {
                e.preventDefault();
                console.log(e);
              }}
            >
              <Dropdown.Item eventKey="1">All</Dropdown.Item>
              <Dropdown.Item eventKey="2">Active</Dropdown.Item>
              <Dropdown.Item eventKey="2">Closed</Dropdown.Item>
            </DropdownButton>
          </Col> */}
        </Row>
        <Row xs={1} sm={1} md={2} lg={3}>
          {items
            .filter((x) => {
              return x.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((item) => {
              return <ItemCard item={item} />;
            })}
        </Row>
      </Container>

      <ItemModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        submitPost={addPost}
      ></ItemModal>

      {/* <Modal
        show={modalShow}
        onHide={() => {
          console.log("modal clos clicked");
          setModalShow(false);
        }}
      >
        Helo
      </Modal> */}
    </>
  );
};

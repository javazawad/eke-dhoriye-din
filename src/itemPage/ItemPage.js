import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { mockData } from "../api/mockData";
import { currentUser, getPost, updatePost } from "../api";
import { ItemModal } from "./itemModal";

export const ItemPage = () => {
  const { itemId } = useParams();

  // const item = mockData.find((x) => x.id === itemId);

  const [item, setItem] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const fetchItem = async () => {
    try {
      const data = await getPost(itemId);
      console.log(data);
      setItem(data);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };

  useEffect(() => {
    console.log("fetching post ...");
    fetchItem();
  }, []);

  const getStatusBadge = () => {
    switch (item.status) {
      case 1:
        return <Badge bg="primary">Active</Badge>;
      case 2:
        return <Badge bg="secondary">Closed</Badge>;
      case 3:
        return <Badge bg="danger">Failed</Badge>;
      default:
        return;
    }
  };
  const getStatus = (statusID) => {
    switch (statusID) {
      case 1:
        return "Active";
      case 2:
        return "Closed";
      case 3:
        return "Failed";
      default:
        return;
    }
  };

  const getAction = () => {
    if (item.postedBy === currentUser) {
      return (
        <>
          <Button
            onClick={() => {
              setModalShow(true);
            }}
          >
            Edit
          </Button>
          <ItemModal
            title="Edit Post"
            modalShow={modalShow}
            setModalShow={setModalShow}
            submitPost={updatePost}
            item={item}
          ></ItemModal>
        </>
      );
    }
  };

  // return empty page if not available
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <img src={item.imageUrl} alt={item.name} />
    //   <h2>{item.name}</h2>
    //   <p>Price: ${item.price}</p>
    //   <p>{item.subtitle}</p>
    //   <p>{item.description}</p>
    // </div>
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={item.image}
              className="details-img-fixed-height"
            />
            {/* <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Age: {item.age}
              </Card.Subtitle>
              <Card.Text>
                <strong>Prizemoney:</strong> {item.prizemoney}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {item.description}
              </Card.Text>
              <Card.Text>
                <strong>Last Seen:</strong> {item.lastSeen}
              </Card.Text>
              <Card.Text>
                <strong>Contact Information:</strong> {item.contactInfo.address}
              </Card.Text>
              <Card.Text>
                <strong>Contact Information:</strong> {item.name}
              </Card.Text>
            </Card.Body> */}
          </Card>
        </Col>
        <Col md={4}>
          <h1>{item.name}</h1>
          {item.prizemoney && (
            <h4>
              <strong>Prizemoney:</strong> {item.prizemoney}
            </h4>
          )}
          {item.status && (
            <h5>
              <strong>Status:</strong> {getStatusBadge()}
            </h5>
          )}
          <Card>
            <Card.Title>Details</Card.Title>
            <ListGroup variant="flush">
              {item.age && (
                <ListGroup.Item>
                  <strong>Age:</strong> {item.age}
                </ListGroup.Item>
              )}
              {item.gender && (
                <ListGroup.Item>
                  <strong>Gender :</strong> {item.gender}
                </ListGroup.Item>
              )}
              {item.lastSeen && (
                <ListGroup.Item>
                  <strong>lastSeen:</strong> {item.lastSeen}
                </ListGroup.Item>
              )}
              {item.contactInfo && (
                <ListGroup.Item>
                  <strong>Contact Info:</strong>
                  {item.contactInfo.name && <p>{item.contactInfo.name}</p>}
                  {item.contactInfo.address && (
                    <p>{item.contactInfo.address}</p>
                  )}
                  {item.contactInfo.mobile && (
                    <p>mobile: {item.contactInfo.mobile}</p>
                  )}
                </ListGroup.Item>
              )}
            </ListGroup>
            {getAction()}
          </Card>
        </Col>
        <Col md={8} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

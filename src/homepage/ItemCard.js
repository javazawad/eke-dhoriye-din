import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    console.log(item);
    navigate(`/posts/${item.id}`);
  };
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
  return (
    <div className="p-3" onClick={handleCardClick}>
      {/* <Link to="/posts/:11"> */}
      <Card className="grid-item">
        <Card.Img
          variant="top"
          src={item.image}
          className="card-img-fixed-height"
        />
        <Card.ImgOverlay>{getStatusBadge()}</Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          {item.prizemoney && <Card.Footer>{item.prizemoney}</Card.Footer>}

          <Card.Text
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "95px",
            }}
          >
            {item.description}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </div>
  );
};

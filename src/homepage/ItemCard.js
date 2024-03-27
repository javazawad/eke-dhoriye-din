import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemCard = (item) => {
  const handleCardClick = () => {
    console.log(item);
  };
  return (
    <div className="p-2" onClick={handleCardClick}>
      <Card style={{ height: "400px" }}>
        <Card.Img
          variant="top"
          src={item.image}
          className="card-img-fixed-height"
        />
        <Card.Body style={{ overflowY: "clip" }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle>{item.age}</Card.Subtitle>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

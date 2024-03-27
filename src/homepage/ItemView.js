import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { mockData } from "../mockData";
import { ItemCard } from "./ItemCard";

export const ItemView = () => {
  const btnclick = () => {
    console.log(mockData);
  };
  return (
    <Container>
      <Row xs={1} sm={1} md={2} lg={3}>
        {mockData.map((item) => {
          return <ItemCard {...item} />;
        })}
      </Row>
    </Container>
  );
};

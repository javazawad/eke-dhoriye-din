import React from "react";
import { ItemView } from "./ItemView";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { RouterProvider } from "react-router-dom";
import { homeRoutes } from "./routes";

export const HomePage = () => {
  return (
    <div>
      {/* <ProductCard
        imageUrl={
          "https://imgproxy.newswav.com/1000x0,q50=/https://sinarharian.com.my/sinarenglish/uploads/images/2024/03/27/2591835.jpg"
        }
        title={"image"}
        price={500}
        tags={["sdka", "sndka", "ororo"]}
      /> */}

      <RouterProvider router={homeRoutes} />
    </div>
  );
};

const ProductCard = ({ imageUrl, title, price, tags }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <div>
          {tags.map((tag, index) => (
            <Badge key={index} variant="primary" className="mr-1">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

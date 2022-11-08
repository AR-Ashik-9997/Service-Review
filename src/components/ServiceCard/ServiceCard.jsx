import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ServiceCard = ({ data }) => {
  const { name, image, price, description } = data;
  return (
    <Col lg={4} md={4} sm={12}>
      <Card className="mt-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>
          </div>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;

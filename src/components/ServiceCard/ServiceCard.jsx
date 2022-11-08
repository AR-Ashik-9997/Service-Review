import React, { useState } from "react";
import { Button, Card, Col, Nav } from "react-bootstrap";

const ServiceCard = ({ data }) => {
  const { name, image, price, description } = data;
  const [characterLength,setCharacterLength]=useState(100);
  const handleViewAll = () => {  
    setCharacterLength(description.length);   
  };  
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="mt-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>
          </div>
          <Card.Text>{description.substr(0,characterLength)+'....'}<Nav.Link onClick={handleViewAll} >view all</Nav.Link></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;

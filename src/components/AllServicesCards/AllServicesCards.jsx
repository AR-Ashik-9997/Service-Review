import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllServicesCards = ({data}) => {
    const { _id,name, image, price, description } = data;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="mt-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price}</Card.Title>
          </div>
          <Card.Text>{description.substr(0, 100) + "."}</Card.Text>
          <div className="d-flex justify-content-end">
          <Link to={`/details-service/${_id}`}><Button variant="outline-info">View Details</Button></Link>
          </div> 
        </Card.Body>        
      </Card>
    </Col>
  );
};

export default AllServicesCards;

import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const AllServicesCards = ({ data }) => {
  const { _id, name, image, price, description } = data;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="mt-3">
        <PhotoProvider>
          <PhotoView src={image}>
            <Card.Img variant="top" src={image} className="img-fluid pointer" />
          </PhotoView>
        </PhotoProvider>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="fs-2">{name}</Card.Title>
            <Card.Title className="fs-2">{price}</Card.Title>
          </div>
          <hr />
          <Card.Text className="text-justify">
            {description.substr(0, 100) + "."}
          </Card.Text>
          <div className="d-flex justify-content-end">
            <Link to={`/details-service/${_id}`}>
              <Button variant="outline-info">View Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllServicesCards;

import React from "react";
import { Card, Col } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const ServiceDetailsCard = ({ data }) => {
  const { name, image, price, description } = data;
  return (
    <Col lg={7} md={6} sm={12}>
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
          <Card.Text className="text-justify">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceDetailsCard;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form, useLoaderData } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";

import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";

const DetailsService = () => {
  const DetailsData = useLoaderData();
  console.log(DetailsData);
  return (
    <Container>
      <Row>
        <ServiceDetailsCard data={DetailsData} />
        <ReviewForm/>
      </Row>
    </Container>
  );
};

export default DetailsService;

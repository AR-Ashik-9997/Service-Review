import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";

const DetailsService = () => {
  const DetailsData = useLoaderData();
  console.log(DetailsData);
  return (
    <Container>
      <Row>
        <ServiceDetailsCard data={DetailsData}/>
      </Row>
    </Container>
  );
};

export default DetailsService;

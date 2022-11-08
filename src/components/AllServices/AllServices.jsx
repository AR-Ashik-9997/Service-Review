import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AllServicesCards from "../AllServicesCards/AllServicesCards";

const AllServices = () => {
  const AllServicesData = useLoaderData();
  return (
    <Container>
      <Row>
        {AllServicesData.map((services) => (
          <AllServicesCards data={services} key={services._id} />
        ))}
      </Row>
    </Container>
  );
};

export default AllServices;

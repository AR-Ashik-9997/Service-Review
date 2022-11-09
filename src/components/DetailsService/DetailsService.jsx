import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import ReviewForm from "../ReviewForm/ReviewForm";

import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";

const DetailsService = () => {
  const DetailsData = useLoaderData();
  return (
    <Container>
      <Row>
        <ServiceDetailsCard data={DetailsData} />
        <ReviewForm data={DetailsData} />
      </Row>
    </Container>
  );
};

export default DetailsService;

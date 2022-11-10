import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import ReviewForm from "../ReviewForm/ReviewForm";

import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";

const DetailsService = () => {
  const DetailsData = useLoaderData();
  return (
    <div className="top-margin">
    <Container>
      <Row>
        <ServiceDetailsCard data={DetailsData} />
        <ReviewForm dataReview={DetailsData} />
      </Row>
    </Container>
    </div>
  );
};

export default DetailsService;

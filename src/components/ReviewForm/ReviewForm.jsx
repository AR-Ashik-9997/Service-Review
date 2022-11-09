import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";
import ServiceReview from "../ServiceReview/ServiceReview";
const ReviewForm = ({ data }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-reviews?serviceId=${data._id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [data._id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.ratings.value;
    const description = form.description.value;
    const review = {
      serviceId: data._id,
      serviceName:data.name,
      rating: rating,
      description: description,
      email: email,
      name: name,
      image: user?.photoURL,
    };
    fetch("http://localhost:5000/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    form.reset();
  };

  return (
    <Col lg={5} md={6} sm={12}>
      <div className=" bg-white rounded-4 mx-auto d-flex justify-content-center">
        <div className="w-75">
          <div>
            <h1 className="mt-5 mb-4 text-center">Review Contents</h1>
            <Card>
              <Card.Body className="card-review">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th className="text-center">image</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Ratings</th>
                      <th className="text-center">description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((reviw) => (
                      <ServiceReview key={reviw._id} data={reviw} />
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
          {user?.uid ? (
            <div>
              <Form className="mt-5" onSubmit={handleSubmit}>
                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicName"
                  >
                    <Form.Control
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicRatings">
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Ratings"
                      name="ratings"
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Your Review here...."
                      rows="3"
                      name="description"
                      required
                      autoComplete="off"
                    />
                  </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button variant="outline-info" type="submit" className="mb-5">
                    Review
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            <div className="d-flex justify-content-end">
              <p className="mt-5 me-4 text-danger">Please login to add a review</p>
              <Link to='/sign-in' state={{ from: location }} replace><Button variant="outline-info" type="submit" className="mt-5 mb-5">
                Sign-In
              </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ReviewForm;

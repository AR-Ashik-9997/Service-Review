import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";
import ServiceReview from "../ServiceReview/ServiceReview";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReviewForm = ({ dataReview }) => {
  const notify = () => toast.success("Successfully review added!");
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://service-data.vercel.app/all-reviews?serviceId=${dataReview._id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [dataReview._id]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.ratings.value;
    const description = form.description.value;
    const currentTime=new Date().getMinutes()+":"+new Date().getSeconds();
    const review = {
      serviceId: dataReview._id,
      serviceName: dataReview.name,
      rating: rating,
      description: description,
      email: email,
      name: name,
      image: user?.photoURL,
      time:currentTime,
    };
    fetch("https://service-data.vercel.app/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,        
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then({});
    form.reset();
  };

  return (
    <Col lg={5} md={6} sm={12}>
      <div className=" mt-3 bg-white rounded-4 mx-auto d-flex justify-content-center">
        <div className="w-75">
          <div>
            <h1 className="mt-5 mb-4 text-center">Review Contents</h1>
            <Card>
              <Card.Body className="card-review">
                {reviews.length > 0 ? (
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
                ) : (
                  <h4 className="text-center">Empty Review</h4>
                )}
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
                  <Button 
                  variant="outline-dark" 
                  type="submit" 
                  className="mb-5"
                  onClick={notify}
                  >
                    Review
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            <div className="d-flex justify-content-end">
              <p className="mt-5 me-4 text-danger">
                Please login to add a review
              </p>
              <Link to="/sign-in" state={{ from: location }} replace>
                <Button
                  variant="outline-info"
                  type="submit"
                  className="mt-5 mb-5"
                >
                  Sign-In
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
      position="top-center"
      autoClose={500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
       />
    </Col>
  );
};

export default ReviewForm;

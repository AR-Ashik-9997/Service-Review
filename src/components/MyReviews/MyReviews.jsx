import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user-reviews?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setUserReviews(data));
  }, [user?.email]);
  const handleDelete = (review) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${review.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/review-delete/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = userReviews.filter((rvw) => rvw._id !== review._id);
            setUserReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="home-container mt-5 mb-5">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="mt-5">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-white text-center">Image</th>
                    <th className="text-white text-center">User Name</th>
                    <th className="text-white text-center">Service Name</th>
                    <th className="text-white text-center">Ratings</th>
                    <th className="text-white text-center">Description</th>
                    <th className="text-white text-center">Update</th>
                    <th className="text-white text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userReviews.map((review) => (
                    <tr key={review._id}>
                      <td className="text-white">
                        <img
                          src={review.image}
                          alt=""
                          className="user-profile mx-auto d-block"
                        />
                      </td>
                      <td className="text-white text-center">{review.name}</td>
                      <td className="text-white text-center">
                        {review.serviceName}
                      </td>
                      <td className="text-white text-center">
                        {review.rating}
                      </td>
                      <td className="text-white text-center">
                        {review.description}
                      </td>
                      <td className="text-white text-center">
                        <Link to={`/update-review/${review._id}`}>
                          <Button variant="outline-success">Update</Button>
                        </Link>
                      </td>
                      <td className="text-white text-center">
                        <Link to="">
                          <Button variant="outline-danger" onClick={()=>handleDelete(review)}>Delete</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyReviews;

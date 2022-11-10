import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";
import useTitle from "../../utility/tittleHooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyReviews = () => { 
  const notify = () => toast.error("Successfully deleted");
  useTitle("My Review");
  const { user, Logout } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);  
  useEffect(() => {
    fetch(`https://service-data.vercel.app/user-reviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
    })
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          return Logout();
        }

        return response.json();
      })
      .then((data) => setUserReviews(data));
  }, [user?.email,Logout]);
  const handleDelete = (review) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${review.name}`
    );
    if (agree) {
      fetch(`https://service-data.vercel.app/review-delete/${review._id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("secret-token")}`,
        },
        
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = userReviews.filter(
              (rvw) => rvw._id !== review._id
            );
            setUserReviews(remaining);
            notify();           
          }
        });
    }
    
  };
  return (
    <div className="home-container top-margin">
      <Container className="home-container">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="mt-5 mb-5">
              {userReviews.length > 0 ? (
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

                    {                      
                    userReviews.map((review) => (
                      <tr key={review._id}>
                        <td className="text-white">
                          <img
                            src={review.image}
                            alt=""
                            className="user-profile mx-auto d-block"
                          />
                        </td>
                        <td className="text-white text-center">
                          {review.name}
                        </td>
                        <td className="text-white text-center">
                          {review.serviceName}
                        </td>
                        <td className="text-white text-center">
                          {review.rating}
                        </td>
                        <td className="text-white text-justify">
                          {review.description}
                        </td>
                        <td className="text-white text-center">
                          <Link to={`/update-review/${review._id}`}>
                            <Button variant="outline-success">Update</Button>
                          </Link>
                        </td>
                        <td className="text-white text-center">
                          <Link to="">
                            <Button
                              variant="outline-danger"
                              onClick={() => handleDelete(review)}
                            >
                              Delete
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h1 className="text-white text-center mt-5 mb-5">
                  Your Review is Empty
                </h1>
              )}
            </div>
          </Col>
        </Row>
      </Container>
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
    </div>
  );
};

export default MyReviews;

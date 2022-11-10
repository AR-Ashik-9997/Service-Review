import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="bg-error">
      <img
        src="https://i.postimg.cc/L6Gv7ptv/server-error-isometric-web-concept-people-working-on-problem-site-hardware-and-software-maintenance.png"
        alt=""
        className="d-block mx-auto img-fluid error-img "
      />
      <div className="d-flex justify-content-center">
        <Link to='/'>
        <Button variant="outline-info">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
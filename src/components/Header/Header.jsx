import React, { useContext } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";

const Header = () => {
  const { user, Logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    Logout().then(() => {});
    navigate("/").catch((error) => console.error(error));
  };
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/' className="fs-2">Courier Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="fs-5" to='/'>Home</Nav.Link>
            {user && user?.photoURL ? (
                <Dropdown>
                  <Nav.Link
                    as={Link}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={user?.displayName}
                    className="nav-link"
                  >
                    <img
                      src={user?.photoURL}
                      variant="top"
                      className="user-profile "
                      alt="Avatar"
                    />
                  </Nav.Link>
                </Dropdown>
              ) : (
                <></>
              )}
              {user?.uid ? (
                <div className="d-flex align-items-center d-grid gap-3 d-block">
                  <Button
                    onClick={handleSignOut}
                    variant="outline-info btn-md text-white"
                  >
                    Sign-Out
                  </Button>                  
                </div>
              ) : (
                <div className="d-flex align-items-center d-grid gap-3 d-block">
                  <Link to="/sign-in">
                    <Button variant="outline-info btn-md text-white">
                      Sign-In
                    </Button>
                  </Link>                  
                </div>
              )}            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

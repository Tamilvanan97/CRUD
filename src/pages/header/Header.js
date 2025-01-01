import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-white"><strong>Employee Management System</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{ width: "100%", justifyContent: "flex-end" }}>
                        <Nav.Link as={NavLink} to="/" exact className="text-white" activeClassName="active">Employees</Nav.Link>
                        <Nav.Link as={NavLink} to="/employee" className="text-white" activeClassName="active">Post Employee</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


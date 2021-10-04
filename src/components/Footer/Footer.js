import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark mt-5">
            <Container>
                <Nav className="d-flex justify-content-center">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/courses">Courses</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </Nav>
                <div>
                    <p className="text-light mb-0 text-center">Copyright &copy;	Kamrul Haider</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
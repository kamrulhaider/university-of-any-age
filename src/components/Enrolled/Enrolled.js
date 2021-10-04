import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/542.jpg'

const Enrolled = () => {
    return (
        <div>
            <Container>
                <h1 className="text-center">Successfully Enrolled</h1>
                <img className="img-fluid" src={img} alt="" />
            </Container>
        </div>
    );
};

export default Enrolled;
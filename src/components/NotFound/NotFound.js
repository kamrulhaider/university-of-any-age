import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/2446912.jpg'

const NotFound = () => {
    return (
        <div>
            <Container>
                <img className="img-fluid" src={img} alt="" />
            </Container>
        </div>
    );
};

export default NotFound;
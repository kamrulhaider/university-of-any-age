import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about"></div>
            <Container className="text-center">
                <Row className="justify-content-center">
                    <div className="col-md-5">
                        <h1>Our Goal</h1>
                        <p>Many dedicated professionals and academics comprise our leadership, offering guidance and support to ensure the high quality of our programs.</p>
                        <p>The President’s Council is comprised of world renowned educational leaders who enrich the university by providing valuable direction and guidance.</p>
                        <p>The Board of Trustees are profound international academics who contribute their vast knowledge and experience to ensuring the university maintains an optimal level of excellence and standards.</p>
                        <p>The Academic Leadership is compromised of the most distinguished academics and professionals from leading universities and corporations around the globe.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;
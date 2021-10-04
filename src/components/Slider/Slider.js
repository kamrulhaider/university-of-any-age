import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';

const Slider = () => {
    return (
        <div className="mt-2 mb-5">
            <Container>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-3"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>University of Anyage</h1>
                            <p>Gain knowledge, skills, and hands-on experience that are instrumental to working as a health care professional in this complex and evolving industry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-3"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>University of Anyage</h1>
                            <p>In collaboration with the IB, our online Master’s Degree Program will help you develop effective skills to become part of the next generation of highly-skilled teachers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;
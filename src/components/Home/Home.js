import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses'
import ContactUs from '../ContactUs/ContactUs';
import Slider from '../Slider/Slider';


const Home = () => {

    // load data
    const [courses] = useCourses();

    return (
        <div className="mb-5">
            <Slider></Slider>

            {/* featured courses */}
            <Container>
                <h1 className="text-center mb-5">Our Main Courses</h1>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.key}
                        ></Course>).slice(0, 4)
                    }
                </Row>
            </Container>

            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
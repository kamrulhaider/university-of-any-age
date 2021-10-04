import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses'


const Home = () => {

    // load data
    const [courses] = useCourses();

    return (
        <div className="my-5">
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.key}
                        ></Course>).slice(0, 4)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;
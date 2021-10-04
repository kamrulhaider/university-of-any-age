import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    // load data
    const [courses] = useCourses();

    return (
        <div className="mt-5">
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.key}
                        ></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
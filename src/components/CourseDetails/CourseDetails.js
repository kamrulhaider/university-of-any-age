import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import DetailCourse from '../DetailCourse/DetailCourse';

const CourseDetails = () => {
    const [courses] = useCourses();
    return (
        <div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <DetailCourse
                            course={course}
                            key={course.key}
                        ></DetailCourse>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;
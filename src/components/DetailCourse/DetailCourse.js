import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailCourse = (props) => {

    // destructuring
    const { name, img, details, price, duration, type } = props.course;

    return (
        <div className="my-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{details}</p>
                            <p>Duration: {duration} Years</p>
                            <p>Type: {type}</p>
                            <p>Price: $ {price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Link to="/enrolled">
                            <button className="btn btn-success">Enroll</button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default DetailCourse;
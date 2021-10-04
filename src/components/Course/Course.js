import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Col } from 'react-bootstrap';
import './Course.css'
import { Link } from 'react-router-dom';

const Course = (props) => {
  // icon 
  const element = <FontAwesomeIcon icon={faAngleDoubleRight} />
  // destructuring the props 
  const { name, img, details } = props.course;

  return (
    <div>
      <Col className="course-card">
        <Card className="border-0">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {details.slice(0, 100)}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Link to="/details">
              <button className="btn btn-success">See More</button>
            </Link>
            <span className="icon">{element}</span>
          </Card.Footer>
        </Card>
      </Col>
    </div >
  );
};

export default Course;
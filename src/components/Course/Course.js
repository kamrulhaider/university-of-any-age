import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
  // icon 
  const element = <FontAwesomeIcon icon={faAngleDoubleRight} />
  // destructuring the props 
  const { name, img, details } = props.course;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {details}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <button className="btn btn-success">See More</button>
            <span className="icon">{element}</span>
          </Card.Footer>
        </Card>
      </Col>
    </div >
  );
};

export default Course;
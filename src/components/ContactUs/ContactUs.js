import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <Container className="mt-5">
                <div className="row bg-success rounded-3 flex-column align-items-center">
                    <h4 className="text-center text-black fw-bold my-3">Contact US</h4>
                    <div className="col-lg-5 col-md-6">
                        <form className="h-100">
                            <div className="mb-3">
                                <input type="Text" className="form-control" id="formName" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="formSubject" placeholder="Subject" />
                            </div>
                            <div className="mb-3 text-center">
                                <textarea className="form-control contact-txtarea"
                                    placeholder="Leave a comment here"></textarea>
                                <Link to="/enrolled">
                                    <button type="submit" className="btn btn-outline-light my-3">Submit</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
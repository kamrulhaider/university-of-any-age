import React from 'react';
import { Container } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div>
            <Container className="mt-5">
                <div class="row bg-success rounded-3 flex-column align-items-center">
                    <h4 class="text-center text-black fw-bold my-3">Contact US</h4>
                    <div class="col-lg-5 col-md-6">
                        <form class="h-100">
                            <div class="mb-3">
                                <input type="Text" class="form-control" id="formName" placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="formSubject" placeholder="Subject" />
                            </div>
                            <div class="mb-3 text-center">
                                <textarea class="form-control contact-txtarea"
                                    placeholder="Leave a comment here"></textarea>
                                <button type="submit" class="btn btn-outline-light my-3">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div className="py-4">
                            <table class="table table-dark">
                                <tr>
                                    <td class="fw-bold">Phone</td>
                                    <td>:</td>
                                    <td>02 9191 7416</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Email</td>
                                    <td>:</td>
                                    <td>example@example.com</td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">Headquater</td>
                                    <td>:</td>
                                    <td>Adelaid, Australia</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
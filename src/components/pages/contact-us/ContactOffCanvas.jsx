import React, {useState} from 'react';
import {Button, Form, Offcanvas} from "react-bootstrap";
import "../../../styles/pages.scss";
import {ReactComponent as Close} from "../../../img/svg/close.svg";

function ContactOffCanvas(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Offcanvas className="mobile-contact-offcanvas" backdrop={false} placement="bottom" show={props.show}>
            <Offcanvas.Header className="mobile-contact-offcanvas-header">
                <Close onClick={props.close}/>
            </Offcanvas.Header>
            <Offcanvas.Body className="mobile-contact-offcanvas-body">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label form="name1" className="form-label">სახელი და გვარი</label>
                        <input
                            className="form-control"
                            required
                            type="text"
                            placeholder="სახელი და გვარი"
                        />
                        <Form.Control.Feedback className="form-control-feedback" type="invalid">
                            სახელი და გვარი აუცილებელია.
                        </Form.Control.Feedback>
                    </div>

                    <div className="form-group"><label htmlFor="phone">ტელეფონი</label>

                        <input
                            className="form-control"
                            type="number"
                            placeholder="ტელეფონი"
                            required
                        />
                        <Form.Control.Feedback className="form-control-feedback" type="invalid">
                            ტელეფონის ნომერი აუცილებელია.
                        </Form.Control.Feedback>
                    </div>


                    <div className="form-group"><label htmlFor="email">ელ. ფოსტა</label><input
                        className="form-control" type="text" id="email" placeholder="ელ.ფოსტა" name="email"/>
                    </div>

                    <div className="form-group"><label htmlFor="title">სათაური</label><input
                        className="form-control" type="text" id="title" placeholder="სათაური" name="title"/>
                    </div>

                    <div className="form-group"><label htmlFor="letter">მოგვწერე</label><textarea
                        className="form-control mobile-contact-offcanvas-textarea" id="letter" name="letter"
                        placeholder="მინდა მოგახსენოთ" required></textarea>
                        <Form.Control.Feedback className="form-control-feedback" type="invalid">
                            წერილი აუცილებელია.
                        </Form.Control.Feedback>
                    </div>

                    <div className='mobile-contact-offcanvas-button'>
                        <Button className="btn btn-primary mobile-contact-offcanvas-btn" variant="primary"
                                type="submit">
                            <svg id="send_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path id="Path_278" data-name="Path 278" d="M0,0H24V24H0Z" fill="none"/>
                                <path id="Path_279" data-name="Path 279" d="M2.01,21,23,12,2.01,3,2,10l15,2L2,14Z"
                                      fill="#fff"/>
                            </svg>
                            გაგზავნა
                        </Button>
                    </div>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default ContactOffCanvas;


import React, {useState} from 'react';
import '../../../styles/pages.scss';
import {Button, Form} from "react-bootstrap";
import ContactOffCanvas from "./ContactOffCanvas";


function Contact() {
    const [showContact, setShowContact] = useState(false);

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
        <div className="contact">

            <div className="contact-top">
                <div className="contact-gradient-top"></div>
                <div className="contact-gradient-bottom"></div>
            </div>


            <div className="contact-us">
                <div className="d-flex flex-row">
                    <div className='contact-us-info'>
                        <h1 className="contact-top-text">კონტაქტი</h1>
                        <div className='contact-us-header'><h1>საკონტაქტო ინფორმაცია</h1></div>

                        <div className="contact-info">
                            <div className='d-flex flex-row'>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="Group_282" data-name="Group 282" transform="translate(-278 -513)">
                                            <circle id="Ellipse_40" data-name="Ellipse 40" cx="17" cy="17" r="17"
                                                    transform="translate(278 513)" fill="#ee303c"/>
                                            <g id="call_black_24dp" transform="translate(283 518)">
                                                <path id="Path_274" data-name="Path 274" d="M0,0H24V24H0Z" fill="none"/>
                                                <path id="Path_275" data-name="Path 275"
                                                      d="M20.01,15.38a11.443,11.443,0,0,1-3.53-.56.977.977,0,0,0-1.01.24L13.9,17.03A15.183,15.183,0,0,1,7.01,10.2L8.96,8.54A1.021,1.021,0,0,0,9.2,7.52a11.153,11.153,0,0,1-.56-3.53A1,1,0,0,0,7.65,3H4.19C3.65,3,3,3.24,3,3.99A17.152,17.152,0,0,0,20.01,21,1.049,1.049,0,0,0,21,19.82V16.37a1,1,0,0,0-.99-.99Z"
                                                      fill="#fff"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <a href="tel:0322991991">322 991 991</a>
                                </div>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="Group_283" data-name="Group 283" transform="translate(-487 -513)">
                                            <circle id="Ellipse_41" data-name="Ellipse 41" cx="17" cy="17" r="17"
                                                    transform="translate(487 513)" fill="#ee303c"/>
                                            <g id="email_black_24dp" transform="translate(492 518)">
                                                <path id="Path_276" data-name="Path 276" d="M0,0H24V24H0Z" fill="none"/>
                                                <path id="Path_277" data-name="Path 277"
                                                      d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z"
                                                      fill="#fff"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <a href="mailto:unison@unison.ge">unison@unison.ge</a>
                                </div>

                            </div>
                            <div className='d-flex'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="Group_281" data-name="Group 281" transform="translate(-278 -584)">
                                            <circle id="Ellipse_42" data-name="Ellipse 42" cx="17" cy="17" r="17"
                                                    transform="translate(278 584)" fill="#ee303c"/>
                                            <g id="location_on_black_24dp" transform="translate(283 589)">
                                                <path id="Path_280" data-name="Path 280" d="M0,0H24V24H0Z" fill="none"/>
                                                <path id="Path_281" data-name="Path 281"
                                                      d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z"
                                                      fill="#fff"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className='contact-address-header'>სათავო ოფისი:</span>
                                    <div className='contact-address-text'>
                                        <span>დ. გამრეკელის 19, საბურთალო, თბილისი, 0160, საქართველო</span>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                                        <g id="Group_281" data-name="Group 281" transform="translate(-278 -584)">
                                            <circle id="Ellipse_42" data-name="Ellipse 42" cx="17" cy="17" r="17"
                                                    transform="translate(278 584)" fill="#ee303c"/>
                                            <g id="location_on_black_24dp" transform="translate(283 589)">
                                                <path id="Path_280" data-name="Path 280" d="M0,0H24V24H0Z" fill="none"/>
                                                <path id="Path_281" data-name="Path 281"
                                                      d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z"
                                                      fill="#fff"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className='contact-address-header'>ბათუმის ოფისი:</span>
                                    <div className='contact-address-text'>
                                        <span>დ. თავდადებულის 31, ბათუმი, საქართველო</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-us-form">
                        <div>
                            <h1>დაგვიტოვე წერილი</h1>
                            <p>უნისონი მუდამ მზად არის მოგისმინოთ</p>
                        </div>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-between">
                                <div className="form-group">
                                    <label form="name1" className="form-label">სახელი და გვარი</label>
                                    <input
                                        className="form-control"
                                        required
                                        type="text"
                                        placeholder="სახელი და გვარი"
                                    />
                                    <Form.Control.Feedback className="form-control-feedback" type="invalid">სახელი და
                                        გვარი
                                        აუცილებელია.</Form.Control.Feedback>
                                </div>

                                <div className="form-group"><label htmlFor="phone">ტელეფონი</label>

                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="ტელეფონი"
                                        required
                                    />
                                    <Form.Control.Feedback className="form-control-feedback" type="invalid">ტელეფონის
                                        ნომერი
                                        აუცილებელია.</Form.Control.Feedback>
                                </div>

                            </div>

                            <div className="form-group"><label htmlFor="email">ელ. ფოსტა</label><input
                                className="form-control" type="text" id="email" placeholder="ელ.ფოსტა" name="email"/>
                            </div>

                            <div className="form-group"><label htmlFor="title">სათაური</label><input
                                className="form-control" type="text" id="title" placeholder="სათაური" name="title"/>
                            </div>

                            <div className="form-group"><label htmlFor="letter">მოგვწერე</label><textarea
                                className="form-control" id="letter" name="letter"
                                placeholder="მინდა მოგახსენოთ" required></textarea>
                                <Form.Control.Feedback className="form-control-feedback" type="invalid">წერილი
                                    აუცილებელია.</Form.Control.Feedback>
                            </div>

                            <Button className="btn btn-primary" variant="primary" type="submit">
                                <svg id="send_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24">
                                    <path id="Path_278" data-name="Path 278" d="M0,0H24V24H0Z" fill="none"/>
                                    <path id="Path_279" data-name="Path 279" d="M2.01,21,23,12,2.01,3,2,10l15,2L2,14Z"
                                          fill="#fff"/>
                                </svg>
                                გაგზავნა
                            </Button>
                        </Form>
                    </div>

                    <div className="contact-form-mobile">
                        <div className="contact-form-mobile-header">დაგვიტოვე წერილი</div>
                        <div><p>უნისონი მუდამ მზად არის მოგისმინოთ</p></div>
                        <Button className="btn btn-primary contact-form-mobile-btn" variant="primary" type="submit"
                                onClick={() => setShowContact(true)}>
                            <svg id="send_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path id="Path_278" data-name="Path 278" d="M0,0H24V24H0Z" fill="none"/>
                                <path id="Path_279" data-name="Path 279" d="M2.01,21,23,12,2.01,3,2,10l15,2L2,14Z"
                                      fill="#fff"/>
                            </svg>
                            მოგვმართეთ
                        </Button>
                        <ContactOffCanvas show={showContact} close={() => setShowContact(false)}/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;
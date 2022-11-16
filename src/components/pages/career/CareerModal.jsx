import React from "react";
import '../../../styles/career.scss';
import {Button, Form} from "react-bootstrap";
import {ReactComponent as CareerModalClose} from "../../../img/partnerClose.svg";
import {ReactComponent as Add} from "../../../img/add.svg";
import {ReactComponent as Send} from "../../../img/send.svg"


function CareerModal(props) {


    return (

        <div className="career-modal">
            <div className="career-modal-header">
                <span>შეავსეთ ფორმა</span>
                <CareerModalClose onClick={props.close}/>
            </div>
            <div className="career-modal-body">
                <Form>

                    <div className="career-modal-form">
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="name">სახელი</label>
                                <input className="form-control" type="text" placeholder="სახელი" id="name"
                                       name="name"/>
                            </div>
                        </div>

                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="last-name">გვარი</label>
                                <input className="form-control" type="text" placeholder="გვარი" id="last-name"
                                       name="last-name"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="phone-number">ტელეფონი</label>
                                <input className="form-control" type="tel" placeholder="ტელეფონი" id="phone-number"
                                       name="phone"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="email">ელ.ფოსტა</label>
                                <input className="form-control" type="email" placeholder="ელ.ფოსტა" id="email"
                                       name="email"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="birthdate">დაბადების თარიღი</label>
                                <input className="form-control" type="date" placeholder="დაბადების თარიღი"
                                       id="birthdate"
                                       name="birthdate"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="city">რომელ ქალაქში გსურთ მუშაობა?</label>
                                <input className="form-control" type="text" placeholder="ქალაქი" id="city"
                                       name="city"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="position">რა დონის პოზიცია გაინტერესებთ?</label>
                                <input className="form-control" type="text" placeholder="პოზიცია" id="position"
                                       name="position"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="job">რა მიმართულებით გსურთ მუშაობა?</label>
                                <input className="form-control" type="text" placeholder="პოზიცია" id="job"
                                       name="job"/>
                            </div>
                        </div>
                        <div className="career-modal-input">
                            <div className="career-form-group">
                                <label htmlFor="salary">სასურველი ანაზღაურება</label>
                                <input className="form-control" type="text" placeholder="სასურველი ანაზღაურება"
                                       id="salary"
                                       name="salary"/>
                                <div className="career-modal-gel"><span>₾</span></div>
                            </div>
                        </div>

                    </div>

                    <div className="modal-career-footer">

                        <span className="career-modal-add-title">განათლება</span>
                        <label htmlFor="education" className="career-modal-add-btn">
                            <Add/> განათლების დამატება
                        </label>
                        <input id="education" className="career-modal-footer-input" type="file"
                               name="education"/>


                        <span className="career-modal-add-title">სამუშაო გამოცდილება</span>
                        <label htmlFor="work-experience" className="career-modal-add-btn">
                            <Add/> სამუშაო გამოცდილების დამატება
                        </label>
                        <input id="work-experience" className="career-modal-footer-input" type="file"
                               name="work-experience"/>

                        <div className="career-modal-add-title"><p>მსურს ელ-ფოსტაზე მივიღო კომპანიის მიმდინარე
                            ვაკანსიები და სიახლეები</p>

                            <div className="modal-footer-check d-flex my-3">
                                <div className="form-check ">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           id="flexRadioDefault1" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        დიახ
                                    </label>
                                </div>
                                <div className="form-check mx-3">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                           id="flexRadioDefault2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        არა
                                    </label>
                                </div>
                            </div>
                            <Button className="career-modal-btn btn-primary" variant="primary" type="submit">
                                <Send/>გაგზავნა
                            </Button>
                        </div>


                    </div>
                </Form>
            </div>
        </div>
    );
}

export default CareerModal;
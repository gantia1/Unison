import React, {useRef, useState} from 'react';
import '../../../styles/career.scss';
import {Button} from "react-bootstrap";
import {ReactComponent as Upload} from "../../../img/svg/upload.svg";
import {ReactComponent as FormImage} from "../../../img/svg/formImage.svg";
import testImage from "../../../img/png/aboutUsCard2.png";
import {ReactComponent as CardArrowLeft} from "../../../img/svg/pageArrowLeft.svg";
import {ReactComponent as CardArrowRight} from "../../../img/svg/pageArrowRight.svg";
import {Link} from "react-router-dom";
import CareerModal from "./CareerModal";
import {ReactComponent as Collapse} from "../../../img/svg/collapse.svg";

function Career() {
    const [activeCard, setActiveCard] = useState(1);
    const ref = useRef(null);
    const [showCareerModal, setShowCareerModal] = useState(false);
    const [collapseText, setCollapseText] = useState("false");

    const handleToggle = () => {
        setCollapseText(!collapseText);
    };

    const handleClick = (id) => {
        if (window.innerWidth > 1024) {
            setActiveCard(id);
        }
    };
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const handleIdIncrease = () => {
        if (window.innerWidth > 1024) {
            setActiveCard(activeCard + 1);
            if (activeCard === 3) {
                setActiveCard(1);
            }
        } else {
            scroll(320);
        }
    }
    const handleIdDecrease = () => {
        if (window.innerWidth > 1024) {

            setActiveCard(activeCard - 1);
            if (activeCard === 1) {
                setActiveCard(3);
            }
        } else {
            scroll(-320);

        }
    }

    function scrollTop() {
        setShowCareerModal(true);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }


    return (
        <>
            <div className="pages-header">

                <div className="career-top">
                    <div className="contact-gradient-top"></div>
                    <div className="contact-gradient-bottom"></div>
                </div>

                {showCareerModal ? (<CareerModal show={showCareerModal} close={() => setShowCareerModal(false)}/>) : (
                    <div>
                        <div className="career-content">
                            <div className="career-left-side">
                                <div className="career-top-text"><h1>კარიერა</h1></div>
                                <div className='career-top-header'><h1>#გახდიუნისონელი</h1></div>
                                <p>თუ გსურს შემოუერთდე ჩვენ გუნდს, დაგვიტოვე ინფორმაცია:</p>
                                <Button className="upload-cv btn-primary" variant="primary" type="submit">
                                    <label htmlFor="upload-cv" className="career-modal-add-btn">
                                        <Upload/>
                                        ატვირთეთ CV
                                    </label>
                                    <input id="upload-cv" className="upload-cv-input" type="file"
                                           name="upload-cv"/>
                                </Button>
                                <p> ან <span className="career-form-image"><FormImage/></span>
                                    <span className="career-form-open" onClick={() => scrollTop()}>
                                შეავსეთ ფორმა
                            </span>
                                </p>
                            </div>

                            <div className={collapseText ? "career-right-side" : "career-right-side-active"}>
                                <div className="career-hr-header">
                                    <h1>ჩვენი HR გუნდი</h1>
                                    <Collapse onClick={handleToggle}/>
                                </div>
                                <p>
                                    “უნისონი” ერთ-ერთი წამყვანი სადაზღვევო კომპანიაა საქართველოში. ამაში კი, უდიდესი
                                    წვლილი მისი
                                    ლოიალური თანამშრომლების გუნდს მიუძღვის, რომელიც კომპანიას 16 წლის მანძილზე ზრდის და
                                    ავითარებს.
                                    სწორედ გუნდური და ჯანსაღი გარემოა ის უმნიშვნელოვანესი პირობა, რომლის მეშვეობით,
                                    კომპანიამ
                                    მოახერხა ბაზარზე საიმედო დამსაქმებლის სახელით პოზიციონირება და გახდა სასურველი,
                                    სანდო
                                    სადაზღვევო
                                    კომპანია თავისი კლიენტებისთვის.
                                </p>
                                <p>
                                    ადამიანური რესურსების მართვის სტრატეგია ორგანიზაციის ბიზნეს სტრატეგიას ეყრდნობა და
                                    ორიენტირებულია გუნდის ეფექტურ მართვაზე, რომელიც ხელს უწყობს კომპანიას ზრდაში,
                                    კონკურენტუნარიანობასა და სასურველი შედეგების მიღწევაში.
                                </p>
                                <p>
                                    ჩვენი ადამიანური რესურსების მართვის მიმართულებისთვის პრიორიტეტულია კომფორტული
                                    სამუშაო
                                    გარემოს
                                    შექმნა, თანამშრომლებს შორის მოტივაციის ამაღლება, მათი უნარებისა და პოტენციალის
                                    მაქსიმალურად
                                    გამოვლინების ხელშეწყობა და ზრუნვა მათ კმაყოფილებასა და განვითარებაზე. ასევე,
                                    არანაკლები
                                    ყურადღება ეთმობა კომპანიის ზრდის ფონზე, თანამშრომელთა ლოიალობის შენარჩუნებას.
                                </p>
                                <p>
                                    ჩვენი გუნდის გამორჩეული თვისებაა კოლეგიურობა და ძალიან პოზიტიური
                                    ურთიერთთანამშრომლობა.
                                    დაკოპირებულია ირაოდან
                                </p>

                            </div>
                        </div>


                        <div className="career-team">
                            <div className="career-team-card-header">
                                <span>მენეჯმენტის გუნდი</span>
                                <div>
                                    <span onClick={handleIdDecrease}><CardArrowLeft/></span>
                                    <span onClick={handleIdIncrease}><CardArrowRight/></span>
                                </div>
                            </div>
                            <div className="career-team-cards" ref={ref}>

                                <div className={`career-team-card ${activeCard === 1 && 'active'}`}
                                     onClick={() => handleClick(1)}>
                                    <div className="career-team-image">
                                        <img src={testImage} alt="testImage"/>
                                    </div>
                                    <div className="career-team-text-container">
                                        <div className="career-team-text-title">
                                            <h3>გიორგი გიორგაძე</h3>
                                            <span>გენერალური დირექტორი</span>
                                        </div>
                                        <div className="career-team-text">
                                            <div className="career-team-text-title-mobile">
                                                <h3>გიორგი გიორგაძე</h3>
                                                <span>გენერალური დირექტორი</span>
                                            </div>
                                            <p>2006 წელს დაამთავრა თბილისის სახელმწიფო
                                                უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი. ფლობს საერთაშორისო
                                                სამართლის
                                                მაგისტრის
                                                ხარისხს. აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი გამოცდილება. 2004
                                                წლიდან
                                                მუშაობს
                                                სადაზღვევო კომპანია ალდაგში, სადაც მისი კარიერა კორპორატიული
                                                კლიენტების…</p>
                                        </div>

                                    </div>
                                </div>

                                <div className={`career-team-card ${activeCard === 2 && 'active'}`}
                                     onClick={() => handleClick(2)}>
                                    <div className="career-team-image">
                                        <img src={testImage} alt="testImage"/>
                                    </div>
                                    <div className="career-team-text-container">
                                        <div className="career-team-text-title">
                                            <h3>გიორგი გიორგაძე</h3>
                                            <span>გენერალური დირექტორი</span>
                                        </div>
                                        <div className="career-team-text">
                                            <div className="career-team-text-title-mobile">
                                                <h3>გიორგი გიორგაძე</h3>
                                                <span>გენერალური დირექტორი</span>
                                            </div>
                                            <p>2006 წელს დაამთავრა თბილისის სახელმწიფო
                                                უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი. ფლობს საერთაშორისო
                                                სამართლის
                                                მაგისტრის
                                                ხარისხს. აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი გამოცდილება. 2004
                                                წლიდან
                                                მუშაობს
                                                სადაზღვევო კომპანია ალდაგში, სადაც მისი კარიერა კორპორატიული
                                                კლიენტების…
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className={`career-team-card ${activeCard === 3 && 'active'}`}
                                     onClick={() => handleClick(3)}>
                                    <div className="career-team-image">
                                        <img src={testImage} alt="testImage"/>
                                    </div>
                                    <div className="career-team-text-container">
                                        <div className="career-team-text-title">
                                            <h3>გიორგი გიორგაძე</h3>
                                            <span>გენერალური დირექტორი</span>
                                        </div>
                                        <div className="career-team-text">
                                            <div className="career-team-text-title-mobile">
                                                <h3>გიორგი გიორგაძე</h3>
                                                <span>გენერალური დირექტორი</span>
                                            </div>
                                            <p>2006 წელს დაამთავრა თბილისის სახელმწიფო
                                                უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი. ფლობს საერთაშორისო
                                                სამართლის
                                                მაგისტრის
                                                ხარისხს. აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი გამოცდილება. 2004
                                                წლიდან
                                                მუშაობს
                                                სადაზღვევო კომპანია ალდაგში, სადაც მისი კარიერა კორპორატიული
                                                კლიენტების…
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="career-team-card-footer">
                                <h5>ინფორმაცია კომპანიის ბენეფიციარების და უშუალო მესაკუთრის შესახებ</h5>
                                <p>ინფორმაცია მზღვეველის აქციების 10 პროცენტის ან 10 პროცენტზე მეტის მფლობელი უშუალო
                                    მესაკუთრის
                                    შესახებ ნახვა შეგიძლიათ <Link to="#">ბმულზე.</Link></p>
                                <p> ინფორმაცია მზღვეველის მნიშვნელოვანი წილის მფლობელი ბენეფიციარი მესაკუთრის შესახებ
                                    ნახვა
                                    შეგიძლიათ <Link to="#">ბმულზე.</Link></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Career;
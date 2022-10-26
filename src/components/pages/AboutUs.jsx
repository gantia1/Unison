import React from 'react';
import './pages.scss';

function AboutUs() {
    return (
        <div className="about-us">

            <div className="about-us-top">
                <div className="about-us-gradient-top"></div>
                <div className="about-us-gradient-bottom"></div>
                <h1 className="about-us-top-text">ჩვენს შესახებ</h1>
            </div>

            <div className="about-us-description">
                <p className='about-us-description-text'>
                    სადაზღვევო კომპანია „უნისონი“ დაფუძნდა 2011 წელს და დროის მცირე მონაკვეთში ქართული სადაზღვევო ბაზრის
                    ერთ-ერთი თვალსაჩინო მოთამაშედ იქცა. სადაზღვევო სფეროში, მენეჯმენტის მრავალწლიანი გამოცდილებითა და
                    პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა და მრავალფეროვანი პროდუქტებით „უნისონმა“ სწრაფად
                    და ადვილად მოიპოვა მომხმარებლის ნდობა და ბაზრის სოლიდური წილი. უნისონი წარმოადგენს დამოუკიდებელ,
                    სხვა ბიზნესებთან არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი თავისუფალი არჩევანის
                    საშუალებას აძლევს. უნისონი მომხმარებელს სთავაზობს მაღალი ხარისხის მომსახურებას, პროვაიდრების
                    თავისუფალ არჩევანსა და კონკურენტუნარიან ფასებს.
                </p>
            </div>

            <div className="about-us-history">
                <h1>უნისონის ისტორია</h1>
            </div>
        </div>
    );
}

export default AboutUs;
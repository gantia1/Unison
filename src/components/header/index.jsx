import ka from '../../img/ka.svg';
import en from '../../img/en.png';
import ru from '../../img/ru.png';
import arrow from '../../img/arrow.svg';
import phone from '../../img/phone.svg';

function Index() {
    return (

        <div className="header">

            <div className='maxWidth-header'>
                <ul>
                    <li><a className='nav-item' href="#">მთავარი</a></li>
                    <li><a className='nav-item' href="#">ჩვენს შესახებ</a></li>
                    <li><a className='nav-item' href="#">სიახლეები</a></li>
                    <li><a className='nav-item' href="#">პარტნიორები</a></li>
                    <li><a className='nav-item' href="#">კონტაქტი</a></li>
                    <li className='dropdown'> SOS
                        <div className="dropdown-content">
                            <div className='dropdown-text'><a href='#'>მოხდა სადაზღვეო შემთხვევა</a></div>
                            <div className="dropdown-text"><a href='#'>შემთხვევის სტატუსის შემოწმება</a></div>
                        </div>
                    </li>
                </ul>

            <div className="dropdown-lang" style={{marginRight:'5%'}}>
                <ul>

                    <li className='choose-lang'><a><img className='lang-img' src={ka}/> ქართული<img className='lang-img img-arrow' src={arrow}/></a>
                        <div className='lang'>

                            <div className='lang-a'>
                                <a href='#'> <img className='lang-img' src={en}/> English </a>
                            </div>

                            <div className='lang-a'>
                                <a href='#'><img className='lang-img' src={ru}/> Русский</a>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className='phone-border'>
                            <div className='phone'>ცხელი ხაზი <img src={phone}/> 2 911 911</div>
                        </div>
                    </li>

                </ul>

            </div>
            </div>

        </div>

    );
}

export default Index;
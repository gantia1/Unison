import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import AboutUs from "./components/pages/about-us/AboutUs";
import Contact from "./components/pages/contact-us/Contact";
import News from "./components/pages/news/News";
import NewsDetail from "./components/pages/news/NewsDetail";
import Partners from "./components/pages/partners/Partners";
import Career from "./components/pages/career/Career";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path='' element={
                        <HomePage/>
                    }/>
                    <Route
                        path='/about-us'
                        element={<AboutUs/>}
                    />

                    <Route path='/contact'
                           element={<Contact/>}
                    />

                    <Route path='/news'
                           element={<News/>}
                    />
                    <Route path='/news/:Id'
                           element={<NewsDetail/>}
                    />
                    <Route path='/partners'
                           element={<Partners/>}
                    />
                    <Route path='/career'
                           element={<Career/>}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;

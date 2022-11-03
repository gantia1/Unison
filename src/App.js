import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import News from "./components/pages/News";


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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

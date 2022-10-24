import './App.css';
import Index from "./components/header";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Slider from "./components/slide/Slider";
import {createMedia} from "@artsy/fresnel"
import MobileFooter from "./components/mobile/MobileFooter";
import MobileHeader from "./components/mobile/MobileHeader";

const {MediaContextProvider, Media} = createMedia({
    breakpoints: {
        sm: 0,
        lg: 1001,
    },
})

function App() {
    return (
        <MediaContextProvider>
            <Media at='sm'>
                <MobileHeader/>
            </Media>
            <Media at='lg'>
                <Index/>
            </Media>
            <Menu/>
            <Slider/>
            <Home/>
            <Media at='sm'>
                <MobileFooter/>
            </Media>
            <Media at='lg'>
                <Footer/>
            </Media>
        </MediaContextProvider>
    );
}

export default App;

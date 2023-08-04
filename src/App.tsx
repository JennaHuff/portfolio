import "./App.css";

import LandingPage from "./pages/LandingPage";

import { AboutMe } from "./pages/AboutMe";
import { Resume } from "./pages/Resume";
import { StackPage } from "./pages/StackPage";
import { Accessibility } from "./Components/Accessibility";

function App() {
    return (
        <>
            <Accessibility />
            <LandingPage />
            <StackPage />
            <AboutMe />
            <Resume />
        </>
    );
}

export default App;

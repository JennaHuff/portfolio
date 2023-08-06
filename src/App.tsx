import "./App.css";

import LandingPage from "./pages/LandingPage";

import { AboutMe } from "./pages/AboutMe";
import { Resume } from "./pages/Resume";
import { StackPage } from "./pages/StackPage";
import { Accessibility } from "./Components/Accessibility";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState<"fancy" | "plain">("fancy");
    const [animations, setAnimations] = useState<
        "animations-on" | "animations-off"
    >("animations-on");
    function toggleTheme() {
        setTheme(theme === "fancy" ? "plain" : "fancy");
    }
    function toggleAnimations() {
        setAnimations(
            animations === "animations-on" ? "animations-off" : "animations-on"
        );
    }
    return (
        <div id="theme-wrapper" className={`${theme} ${animations}`}>
            <Accessibility
                theme={theme}
                toggleTheme={toggleTheme}
                animations={animations}
                toggleAnimations={toggleAnimations}
            />
            <LandingPage />
            <StackPage />
            <AboutMe />
            <Resume />
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";

import stackItems from "./constants";
import LandingPage from "./pages/LandingPage";

function StackItemCard(item: IStackItem) {
    return (
        <div className="stack-item-card">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <>{item.Icon("stack-item-image")}</>
                <h1>{item.name}</h1>
            </div>
            <p>{item.description}</p>
            <a href={item.docsLink} target="_blank">
                Learn more
            </a>
        </div>
    );
}

function StackPage() {
    const [currentItem, setCurrentItem] = useState(
        StackItemCard(stackItems[0])
    );
    return (
        <div className="page">
            <h1>My current stack</h1>
            <div className="icons-bar">
                {stackItems.map((item) => (
                    <div
                        onMouseEnter={() => setCurrentItem(StackItemCard(item))}
                        onClick={() => setCurrentItem(StackItemCard(item))}
                    >
                        <>{item.Icon("stack-item-thumbnail")}</>
                    </div>
                ))}
            </div>
            {currentItem}
        </div>
    );
}

function AboutMe() {
    return (
        <div className="page">
            <h1>About me</h1>
            <p style={{ fontSize: "max(16px, 2vw)" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                eligendi officiis quaerat quidem quas excepturi ab assumenda ea
                quos incidunt ipsam cum quasi fugiat, provident vero, magnam
                quisquam architecto odio dolor quibusdam molestiae at? Ipsam
                architecto eum obcaecati iure, adipisci delectus est quod autem
                officiis nulla dolores fuga, rem esse, minima veritatis dolorum
                commodi. Nostrum aliquam sint veniam temporibus in provident non
                dolores quasi nihil reiciendis explicabo sequi, atque alias iure
                eaque maxime. Quas hic fugit, exercitationem nisi provident
                veritatis!
            </p>
        </div>
    );
}

function Resume() {
    return (
        <div className="page">
            <h1>Resume</h1>
            <div style={{ display: "flex", height: "50vh" }}>
                <div style={{ width: "50vw", borderRight: "4px solid gray" }}>
                    2022
                </div>
                <div style={{ width: "50vw" }}>2021</div>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <LandingPage />
            <StackPage />
            <AboutMe />
            <Resume />
        </>
    );
}

export default App;

import { useState } from "react";
import "./App.css";

import stackItems from "./constants";

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
        <div className="stack-page">
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

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Anton's Landing Page</h1>
            <h2>Web Dev something texty</h2>
            <h3>📍City, Country</h3>
        </div>
    );
}

function App() {
    return (
        <>
            <LandingPage />
            <StackPage />
        </>
    );
}

export default App;

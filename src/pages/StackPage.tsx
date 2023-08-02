import { useState } from "react";
import stackItems from "../stackItems";

function StackItemCard(item: IStackItem) {
    return (
        <div className="stack-item-card">
            <>{item.icon}</>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <a href={item.docsLink} target="_blank" id="learn-more">
                Learn more
            </a>
        </div>
    );
}

export function StackPage() {
    const [currentItem, setCurrentItem] = useState(
        StackItemCard(stackItems[0])
    );
    const [isFistFocus, setIsFirstFocus] = useState(0);
    return (
        <div className="page stack-page">
            <h1>Tech stack</h1>
            <div className="icons-bar">
                {stackItems.map((item, key) => (
                    <div
                        onMouseEnter={() => {
                            setCurrentItem(StackItemCard(item)),
                                focus(),
                                setIsFirstFocus(key);
                        }}
                        onClick={() => {
                            setCurrentItem(StackItemCard(item)),
                                setIsFirstFocus(key);
                        }}
                        onFocusCapture={() => {
                            setCurrentItem(StackItemCard(item)),
                                setIsFirstFocus(key);
                        }}
                        key={key}
                        id={isFistFocus === key ? "focused-item" : ""}
                        aria-label={item.name}
                        tabIndex={0}
                    >
                        <>{item.icon}</>
                    </div>
                ))}
            </div>
            {currentItem}
        </div>
    );
}

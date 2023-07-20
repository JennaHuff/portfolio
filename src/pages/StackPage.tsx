import { useState } from "react";
import stackItems from "../constants";

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

export function StackPage() {
    const [currentItem, setCurrentItem] = useState(
        StackItemCard(stackItems[0])
    );
    return (
        <div className="page">
            <h1>My current stack</h1>
            <div className="icons-bar">
                {stackItems.map((item, key) => (
                    <div
                        onMouseEnter={() => setCurrentItem(StackItemCard(item))}
                        onClick={() => setCurrentItem(StackItemCard(item))}
                        key={key}
                    >
                        <>{item.Icon("stack-item-thumbnail")}</>
                    </div>
                ))}
            </div>
            {currentItem}
        </div>
    );
}

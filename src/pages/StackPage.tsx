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
    return (
        <div className="page stack-page">
            <h1>My current stack</h1>
            <div className="icons-bar">
                {stackItems.map((item, key) => (
                    <div
                        onMouseEnter={() => setCurrentItem(StackItemCard(item))}
                        onClick={() => setCurrentItem(StackItemCard(item))}
                        key={key}
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

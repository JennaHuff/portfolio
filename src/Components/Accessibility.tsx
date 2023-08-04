import { useState } from "react";

export function Accessibility() {
    const [backgroundMode, setBackgroundMode] = useState(true);
    const [animations, setAnimations] = useState(true);
    return (
        <div id="accessibility">
            accessibility
            <ul>
                <li>
                    background mode
                    <button onClick={() => setBackgroundMode(!backgroundMode)}>
                        {backgroundMode ? "fancy" : "plain"}
                    </button>
                </li>
                <li>
                    animations
                    <button onClick={() => setAnimations(!animations)}>
                        {animations ? "on" : "off"}
                    </button>
                </li>
            </ul>
        </div>
    );
}

import ReactSwitch from "react-switch";

export function Accessibility({
    theme,
    toggleTheme,
    animations,
    toggleAnimations,
}: {
    theme: "fancy" | "plain";
    toggleTheme: () => void;
    animations: "animations-on" | "animations-off";
    toggleAnimations: () => void;
}) {
    return (
        <div id="accessibility">
            accessibility
            <ul>
                <li>
                    background mode
                    <button onClick={() => toggleTheme()}>{theme}</button>
                </li>
                <li>
                    animations
                    <button onClick={() => toggleAnimations()}>
                        {animations === "animations-on" ? "on" : "off"}
                    </button>
                </li>
            </ul>
        </div>
    );
}

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
            <label>
                <span>plain background</span>
            </label>
            <ReactSwitch
                onChange={() => toggleTheme()}
                checked={theme === "plain"}
            />
            <label>
                <span>animations</span>
            </label>
            <ReactSwitch
                id={"accessibility-switch"}
                onChange={() => toggleAnimations()}
                checked={animations === "animations-on"}
            />
        </div>
    );
}

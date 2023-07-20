export function ProgressBar() {
    return (
        <div
            style={{
                width: "80%",
                backgroundColor: "lightgray",
                height: "15px",
                position: "absolute",
                bottom: "10px",
                left: "0",
                right: "0",
                margin: "0 auto",
                borderRadius: "15px",
            }}
        >
            <div
                id={"progress-bar"}
                style={{
                    width: "25%",
                    height: "100%",
                    backgroundColor: "black",
                    borderRadius: "15px",
                }}
            ></div>
        </div>
    );
}

import { ReactComponent as GithubLogo } from "../assets/Github Logo White.svg";

export default function LandingPage() {
    return (
        <div className="page landing-page">
            <div className="landing-page-grid">
                <h1>
                    Anton J <br />
                </h1>
                <h2>Front End Portfolio</h2>

                <div id="landing-page-buttons">
                    <button aria-label="contact">✉️</button>

                    <button id="github-logo" aria-label="github">
                        <a href="https://github.com/JennaHuff">
                            {<GithubLogo />}
                        </a>
                    </button>
                </div>
                <h3>📍 Bordeaux, France</h3>
            </div>
        </div>
    );
}

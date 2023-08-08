import { ReactComponent as ReactLogo } from "./assets/React Logo.svg";
import { ReactComponent as TypescriptLogo } from "./assets/Typescript Logo.svg";
import { ReactComponent as ViteLogo } from "./assets/Vite Logo.svg";
import { ReactComponent as GitLogo } from "./assets/Git Logo.svg";
import { ReactComponent as VscLogo } from "./assets/VSC Logo.svg";
import { ReactComponent as CssLogo } from "./assets/CSS Logo.svg";

const stackItems: IStackItem[] = [
    {
        name: "React",
        icon: <ReactLogo />,
        catchphrase: "Avoid repetitive code",
        description:
            "React is an open-source front-end JavaScript library for building user interfaces based on reusable components (bricks, if you will). React can be used to develop single-page (SPA), mobile, or server-rendered (SSR) applications.",
        docsLink: "https://react.dev/",
    },
    {
        name: "Typescript",
        icon: <TypescriptLogo />,
        catchphrase: "Catch errors early in your editor",
        description:
            "TypeScript is an open-source high-level programming language that adds static typing to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
        docsLink: "https://www.typescriptlang.org/",
    },
    {
        name: "ViteJS",
        icon: <ViteLogo />,
        catchphrase: "Bundle React apps fast",
        description:
            "Vite  is a local development server boasting Hot Module Replacement, a pre-configured RollupJs bundler and out-of-the-box support for Typescript, JSX and server-side rendering (SSR).",
        docsLink: "https://vitejs.dev/",
    },
    {
        name: "Visual Studio Code",
        icon: <VscLogo />,
        description:
            "Visual Studio Code is the most popular code editor. It offers tens of thousands of extensions, and features such as syntax highlighting, automatic formatting and refactoring.",
        docsLink: "https://code.visualstudio.com/",
    },
    {
        name: "Git",
        icon: <GitLogo />,
        description: "Version control software",
        docsLink: "https://git-scm.com/",
    },
    {
        name: "CSS 3",
        icon: <CssLogo />,
        description: "Good old, cascading, reliable style sheets",
        docsLink: "https://www.w3.org/Style/CSS/learning",
    },
];

export default stackItems;

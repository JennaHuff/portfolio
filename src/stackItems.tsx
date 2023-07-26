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
        description:
            "A powerful modern UI library Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        docsLink: "https://react.dev/",
    },
    {
        name: "Typescript",
        icon: <TypescriptLogo />,
        description: "Adds types to javascript",
        docsLink: "https://www.typescriptlang.org/",
    },
    {
        name: "ViteJS",
        icon: <ViteLogo />,
        description: "Fast react app bundler",
        docsLink: "https://vitejs.dev/",
    },
    {
        name: "Visual Studio Code",
        icon: <VscLogo />,
        description: "An ide ++ plugins",
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

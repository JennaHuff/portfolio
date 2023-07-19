import { ReactComponent as ReactLogo } from "./assets/React Logo.svg";
import { ReactComponent as TypescriptLogo } from "./assets/Typescript Logo.svg";
import { ReactComponent as ViteLogo } from "./assets/Vite Logo.svg";
import { ReactComponent as GitLogo } from "./assets/Git Logo.svg";
import { ReactComponent as VscLogo } from "./assets/VSC Logo.svg";
import { ReactComponent as CssLogo } from "./assets/CSS Logo.svg";

const stackItems: IStackItem[] = [
    {
        name: "React",
        Icon: (className: string) => <ReactLogo className={className} />,
        description:
            "A powerful modern UI library Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        docsLink: "https://react.dev/",
    },
    {
        name: "Typescript",
        Icon: (className: string) => <TypescriptLogo className={className} />,
        description: "Adds types to javascript",
        docsLink: "https://www.typescriptlang.org/",
    },
    {
        name: "ViteJS",
        Icon: (className: string) => <ViteLogo className={className} />,
        description: "Fast react app bundler",
        docsLink: "https://vitejs.dev/",
    },
    {
        name: "Visual Studio Code",
        Icon: (className: string) => <VscLogo className={className} />,
        description: "An ide ++ plugins",
        docsLink: "https://code.visualstudio.com/",
    },
    {
        name: "Git",
        Icon: (className: string) => <GitLogo className={className} />,
        description: "Version control software",
        docsLink: "https://git-scm.com/",
    },
    {
        name: "CSS 3",
        Icon: (className: string) => <CssLogo className={className} />,
        description: "Good old, cascading, reliable style sheets",
        docsLink: "https://www.w3.org/Style/CSS/learning",
    },
];

export default stackItems;

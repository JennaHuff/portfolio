import { ReactComponent as ReactLogo } from "./assets/React Logo.svg";
import { ReactComponent as TypescriptLogo } from "./assets/Typescript Logo.svg";
import { ReactComponent as ViteLogo } from "./assets/Vite Logo.svg";

const stackItems: IStackItem[] = [
    {
        name: "React",
        Icon: (className: string) => <ReactLogo className={className} />,
        description:
            "A powerful modern UI library Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima magni expedita autem vero iure, iusto eum nulla cupiditate, voluptates suscipit debitis consequuntur laboriosam ab, itaque placeat veniam quasi dicta?",
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
        name: "React",
        Icon: (className: string) => <ReactLogo className={className} />,
        description: "A powerful modern UI library",
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
];

export default stackItems;

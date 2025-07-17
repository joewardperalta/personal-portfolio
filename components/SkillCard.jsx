import { Paragraph, SubHeading } from "@/components/typography";
import Link from "next/link";
import {
  BootstrapIcon,
  CSSIcon,
  DockerIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JavaIcon,
  JavaScriptIcon,
  JestIcon,
  JiraIcon,
  MongoDBIcon,
  MySQLIcon,
  PostmanIcon,
  ReactIcon,
  SpringIcon,
  TailwindCSSIcon,
  VercelIcon,
} from "@/components/icons";

// Icons
const icons = {
  html: <HTMLIcon />,
  css: <CSSIcon />,
  javascript: <JavaScriptIcon />,
  reactjs: <ReactIcon />,
  tailwindcss: <TailwindCSSIcon />,
  bootstrap: <BootstrapIcon />,
  jest: <JestIcon />,
  java: <JavaIcon />,
  spring: <SpringIcon />,
  postman: <PostmanIcon />,
  mysql: <MySQLIcon />,
  mongodb: <MongoDBIcon />,
  docker: <DockerIcon />,
  vercel: <VercelIcon />,
  git: <GitIcon />,
  github: <GitHubIcon />,
  jira: <JiraIcon />,
};

/**
 * Renders an individual skill's thumbnail and metadata
 *
 * @param {Object} data - Skill object
 *
 * @returns Rendered list element with data from each skill object
 */
export default function SkillCard({ data }) {
  return (
    <li className="w-full">
      <Link
        className="flex items-center group"
        href={data.resourceLink}
        target="blank"
      >
        {/* SVG */}
        <div
          className="w-[52px] h-[52px] p-2 border border-dashed 
        border-tertiary-dark rounded-lg group-hover:border-secondary 
        transition-all duration-300"
        >
          {icons[data.icon]}
        </div>

        <div className="ml-3">
          <SubHeading className="mb-0.5 !text-base">{data.title}</SubHeading>
          <Paragraph className="text-sm">{data.role}</Paragraph>
        </div>
      </Link>
    </li>
  );
}

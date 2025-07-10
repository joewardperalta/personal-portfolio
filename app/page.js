// Components
import Headline from "@/components/containers/Headline";
import Section from "@/components/containers/Section";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/containers/Wrapper";
import CallToAction from "@/components/containers/CallToAction";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import SectionHeading from "@/components/typography/SectionHeading";
import ProjectList from "@/components/containers/ProjectList";
import ProjectCard from "@/components/cards/ProjectCard";
import StackList from "@/components/containers/StackList";
import SkillCard from "@/components/cards/SkillCard";

// Icons
import HTMLIcon from "@/components/icons/tech/HTMLIcon";
import ReactIcon from "@/components/icons/tech/ReactIcon";
import TailwindCSSIcon from "@/components/icons/tech/TailwindCSSIcon";
import BootstrapIcon from "@/components/icons/tech/BootstrapIcon";
import JestIcon from "@/components/icons/tech/JestIcon";
import JavaIcon from "@/components/icons/tech/JavaIcon";
import CSSIcon from "@/components/icons/tech/CSSIcon";
import JavaScriptIcon from "@/components/icons/tech/JavaScriptIcon";
import SpringIcon from "@/components/icons/tech/SpringIcon";
import PostmanIcon from "@/components/icons/tech/PostmanIcon";
import MySQLIcon from "@/components/icons/tech/MySQLIcon";
import MongoDBIcon from "@/components/icons/tech/MongoDBIcon";
import DockerIcon from "@/components/icons/tech/DockerIcon";
import VercelIcon from "@/components/icons/tech/VercelIcon";
import GitIcon from "@/components/icons/tech/GitIcon";
import GitHubIcon from "@/components/icons/tech/GitHubIcon";
import JiraIcon from "@/components/icons/tech/JiraIcon";

// Data
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import Link from "next/link";

// Constants
const techStackIconMap = {
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

export default function Page() {
  return (
    <main className="main-content">
      <Section>
        <Wrapper className="border-b border-dashed border-tertiary-dark">
          <Headline>
            <Title>
              Hey, I&apos;m Joeward.{" "}
              <span className="block">I&apos;m a Full Stack Developer.</span>
            </Title>

            <Paragraph className="max-w-[576px]">
              Diploma graduate in Computer Programming & Analysis with 2 years
              of hands-on experience building web applications — ready to
              contribute as a junior full stack developer.
            </Paragraph>
          </Headline>

          <CallToAction>
            <Link className="btn primary-btn" href="/projects">
              View projects
            </Link>
            <Link
              className="btn secondary-btn"
              href="/resources/joeward_peralta_resume.pdf"
              download
            >
              Download resume
            </Link>
          </CallToAction>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline>
            <SectionHeading>Selected projects</SectionHeading>
          </Headline>

          <ProjectList>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.img}
                href={project.caseStudyLink}
                title={project.title}
                type={project.type}
              />
            ))}
          </ProjectList>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline>
            <SectionHeading>My stack</SectionHeading>
          </Headline>

          <StackList>
            {techStack.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={techStackIconMap[skill.icon]}
                title={skill.title}
                role={skill.role}
                href={skill.resourceLink}
              />
            ))}
          </StackList>
        </Wrapper>
      </Section>
    </main>
  );
}

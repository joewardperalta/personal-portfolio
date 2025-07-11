// Components
import Link from "next/link";
import Headline from "@/components/Headline";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { SectionHeading, Paragraph, Title } from "@/components/Typography";
import ProjectList from "@/components/ProjectList";
import StackList from "@/components/StackList";

// Data
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import Flex from "@/components/Flex";

export default function Page() {
  return (
    <main className="main-content">
      <Section>
        <Wrapper className="border-b border-dashed border-tertiary-dark pb-10 mb-5">
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

          <Flex>
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
          </Flex>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline>
            <Flex justifyContent="between">
              <SectionHeading>Selected projects</SectionHeading>
              <Link className="btn secondary-btn" href="/projects">
                View projects
              </Link>
            </Flex>
          </Headline>

          <ProjectList projects={projects} />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline>
            <SectionHeading>My stack</SectionHeading>
          </Headline>

          <StackList skills={techStack} />
        </Wrapper>
      </Section>
    </main>
  );
}

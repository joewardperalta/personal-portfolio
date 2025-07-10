// Components
import Headline from "@/components/containers/Headline";
import Section from "@/components/containers/Section";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/containers/Wrapper";
import CallToAction from "@/components/containers/CallToAction";
import SectionHeading from "@/components/typography/SectionHeading";
import ProjectList from "@/components/containers/ProjectList";
import StackList from "@/components/containers/StackList";

// Data
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import Link from "next/link";

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

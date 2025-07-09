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
import ProjectCard from "@/components/ProjectCard";

// Data

import projects from "@/data/projects.json";

export default function Page() {
  return (
    <main className="main-content">
      <Section>
        <Wrapper className="border-b border-dashed border-tertiary-dark">
          <Headline>
            <Title>
              Hey, I&apos;m Joeward.{" "}
              <span className="block">I&apos;m a Full Stack Developer</span>
            </Title>

            <Paragraph>
              I&apos;ve been crafting websites and digital experiences for the
              past 10 years.
            </Paragraph>
          </Headline>

          <CallToAction>
            <PrimaryButton className="mr-3">Get in touch</PrimaryButton>
            <SecondaryButton>About me</SecondaryButton>
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
            {/* <li className="w-full">
              <Link className="rounded-md overflow-hidden block" href="/">
                <Image
                  className="w-full h-full"
                  src="/images/project-sample-1.jpg"
                  width={1920}
                  height={1080}
                  alt=""
                />
              </Link>
            </li>

            <li className="w-full">
              <Link className="rounded-md overflow-hidden block" href="/">
                <Image
                  className="w-full h-full"
                  src="/images/project-sample-1.jpg"
                  width={1920}
                  height={1080}
                  alt=""
                />
              </Link>
            </li> */}
          </ProjectList>
        </Wrapper>
      </Section>
    </main>
  );
}

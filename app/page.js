// Components
import Link from "next/link";
import Headline from "@/components/Headline";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { SectionHeading, Paragraph, Title } from "@/components/Typography";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import Flex from "@/components/Flex";
import List from "@/components/List";
import BlogCard from "@/components/BlogCard";

// Data
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import blogs from "@/data/blogs.json";

export default function Page() {
  // Map featured projects in a ProjectCard component into an array
  const featuredProjectCards = projects.map(
    (project) =>
      project.featured && <ProjectCard key={project.id} project={project} />
  );

  // Map tech stack in a SkillCard component into an array
  const skillCards = techStack.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ));

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

          <List
            items={projects}
            renderItem={(item) => {
              return item.featured && <ProjectCard key={item.id} data={item} />;
            }}
            columns={3}
          />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline>
            <SectionHeading>My stack</SectionHeading>
          </Headline>

          <List
            items={techStack}
            renderItem={(item) => <SkillCard key={item.id} data={item} />}
            columns={4}
            featured
          />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline>
            <Flex justifyContent="between">
              <SectionHeading>Recent blog posts</SectionHeading>
              <Link className="btn secondary-btn" href="/blog">
                View blog
              </Link>
            </Flex>
          </Headline>

          <div className="p-3 border border-dashed border-tertiary-dark rounded-lg">
            <List
              items={blogs}
              renderItem={(item) => <BlogCard key={item.id} data={item} />}
              columns={3}
            />
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}

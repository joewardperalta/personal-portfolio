// Components
import Link from "next/link";
import Headline from "@/components/Headline";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { SectionHeading, Paragraph, Title } from "@/components/Typography";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import List from "@/components/List";
import BlogCard from "@/components/BlogCard";

// Utilities
import sortBlogPostsByDate from "@/utils/sortBlogPostsByDate";

// Data
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import blogs from "@/data/blogs.json";

import Newsletter from "@/components/Newsletter";

export default function Page() {
  return (
    <main className="main-content">
      {/* Hero section */}
      <Section>
        <Wrapper className="pb-5">
          {/* Main headline */}
          <Headline className="flex flex-col gap-4">
            <Title>
              Hey, I&apos;m Joeward.{" "}
              <span className="block">I&apos;m a Full Stack Developer.</span>
            </Title>

            <Paragraph className="max-w-[36rem]">
              Diploma graduate in Computer Programming & Analysis with 2 years
              of hands-on experience building web applications — ready to
              contribute as a junior full stack developer.
            </Paragraph>
          </Headline>

          {/* CTA buttons */}
          <div className="flex gap-2">
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
          </div>

          {/* Horizontal line */}
          <div className="border-b border-tertiary-dark w-full border-dashed"></div>
        </Wrapper>
      </Section>

      {/* Projects section */}
      <Section>
        <Wrapper>
          {/* Main headline */}
          <Headline className="flex justify-between items-center gap-2.5">
            <SectionHeading>Selected projects</SectionHeading>
            <Link className="btn secondary-btn" href="/projects">
              All Projects
            </Link>
          </Headline>

          {/* List of projects */}
          <List
            items={projects}
            renderItem={(item) => {
              return item.featured && <ProjectCard key={item.id} data={item} />;
            }}
            columns={3}
          />
        </Wrapper>
      </Section>

      {/* Skills section */}
      <Section>
        <Wrapper>
          {/* Main headline */}
          <Headline className="flex justify-between items-center gap-2.5">
            <SectionHeading>Tech Stack</SectionHeading>
          </Headline>

          {/* List of skills/tech stack */}
          <List
            items={techStack}
            renderItem={(item) => <SkillCard key={item.id} data={item} />}
            columns={4}
            featured
          />
        </Wrapper>
      </Section>

      {/* Blog section */}
      <Section>
        <Wrapper>
          {/* Main headlin */}
          <Headline className="flex justify-between items-center gap-2.5">
            <SectionHeading>Recent Blog Posts</SectionHeading>
            <Link className="btn secondary-btn" href="/projects">
              View Blog
            </Link>
          </Headline>

          <div className="p-3 border border-dashed border-tertiary-dark rounded-lg">
            <List
              items={blogs}
              renderItem={(item) => <BlogCard key={item.id} data={item} />}
              sortFunction={sortBlogPostsByDate}
              columns={3}
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Newsletter />
        </Wrapper>
      </Section>
    </main>
  );
}

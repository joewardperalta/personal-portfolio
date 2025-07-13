// Components
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import Headline from "@/components/Headline";
import { Title, Paragraph, SectionHeading } from "@/components/Typography";
import Link from "next/link";
import Image from "next/image";
import List from "@/components/List";
import SkillCard from "@/components/SkillCard";
import ExperienceCard from "@/components/ExperienceCard";
import BlogCard from "@/components/BlogCard";

// Utilities
import sortBlogPostsByDate from "@/utils/sortBlogPostsByDate";

// Data
import projects from "@/data/projects.json";
import techStack from "@/data/tech-stack.json";
import blogs from "@/data/blogs.json";

export default function Page() {
  return (
    <main className="main-content">
      <Section>
        <Wrapper className="pb-5">
          {/* Main headline */}
          <Headline className="flex flex-col gap-4">
            <Title>About Me</Title>
          </Headline>

          {/* CTA buttons */}
          <div className="flex gap-2">
            <Link className="btn primary-btn" href="/contact">
              Get in touch
            </Link>
            <Link className="btn secondary-btn" href="/projects">
              View projects
            </Link>
          </div>

          {/* Horizontal line */}
          <div className="border-b border-tertiary-dark w-full border-dashed"></div>

          {/* Author's info */}
          <dl
            className="flex text-center text-white divide-x divide-dashed 
            divide-tertiary-dark py-4 bg-primary-light w-fit rounded-lg"
          >
            {[
              {
                id: 0,
                title: "Based In",
                description: "Toronto, Canada",
              },
              {
                id: 1,
                title: "1+",
                description: "Years of Experience",
              },
              {
                id: 2,
                title: projects.length,
                description: "Projects Completed",
              },
            ].map((item) => (
              <div className="px-8" key={item.id}>
                <dt className="text-lg">{item.title}</dt>
                <dd className="text-tertiary">{item.description}</dd>
              </div>
            ))}
          </dl>
        </Wrapper>
      </Section>

      {/* About */}
      <Section>
        <Wrapper className="flex-row gap-16 items-center">
          <Headline className="space-y-4">
            <SectionHeading>Hello! I&apos;m Joeward,</SectionHeading>
            <Paragraph>
              I&apos;m a full stack developer who builds web applications that
              are functional, efficient, and easy to use. I work with both the
              front-end and back-end, using tools like HTML, CSS, JavaScript,
              React, and Java.
            </Paragraph>
            <Paragraph>
              I focus on writing code that&apos;s clean and easy to maintain,
              and I care about how users interact with the products I help
              build. I&apos;ve worked on real projects for organizations like
              community groups and small businesses, helping them create
              websites that meet their needs.
            </Paragraph>
            <Paragraph>
              I&apos;m always learning and improving my skills so I can keep up
              with current tools and techniques in web development. I enjoy
              working with others and building things that work well and make
              sense.
            </Paragraph>
          </Headline>

          <div className="">
            <Image
              className="w-full object-cover rounded-lg"
              src="/images/joewardperalta.jpg"
              width={1920}
              height={1080}
              alt="Joeward Peralta"
            />
          </div>
        </Wrapper>
      </Section>

      {/* Work experience */}
      <Section>
        <Wrapper>
          <SectionHeading>
            <Headline>Work Experience</Headline>
          </SectionHeading>

          <div>
            <ExperienceCard
              role="Full Stack Developer"
              company="Freelance"
              startDate="2024"
              endDate="Present"
              description="Developed fast, accessible web apps with React, Next.js, and Node.js, delivering secure, tested solutions from concept to deployment."
            />
          </div>
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
    </main>
  );
}

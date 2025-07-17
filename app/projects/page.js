"use client";
import Section from "@/components/Section";
import { Title } from "@/components/typography";
import Headline from "@/components/Headline";
import Wrapper from "@/components/Wrapper";
import ProjectList from "@/components/ProjectList";

export default function Page() {
  return (
    <main className="main-content">
      {/* Hero section */}
      <Section>
        <Wrapper className="pb-5">
          {/* Main headline */}
          <Headline className="flex flex-col gap-4">
            <Title>Recent Projects</Title>
          </Headline>

          <ProjectList columns={2} searchable />
        </Wrapper>
      </Section>
    </main>
  );
}

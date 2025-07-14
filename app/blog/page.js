import Section from "@/components/Section";
import Headline from "@/components/Headline";
import Wrapper from "@/components/Wrapper";
import { Title } from "@/components/Typography";
import SearchProjects from "@/components/SearchProjects";

// Data
import projects from "@/data/projects.json";

export default function Page() {
  return (
    <main className="main-content">
      {/* Hero section */}
      <Section>
        <Wrapper className="pb-5">
          {/* Main headline */}
          <Headline className="flex flex-col gap-4">
            <Title>My Blog</Title>
          </Headline>

          {/* List all the filtered projects based on search */}
          <SearchProjects projects={projects} />
        </Wrapper>
      </Section>
    </main>
  );
}

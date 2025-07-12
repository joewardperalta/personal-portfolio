import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import Headline from "@/components/Headline";
import { Title, Paragraph } from "@/components/Typography";

export default function Page() {
  return (
    <main className="main-content">
      <Section>
        <Wrapper className="border-b border-dashed border-tertiary-dark pb-10 mb-5">
          <Headline className="!mb-0">
            <Title className="!mb-0">About me</Title>
          </Headline>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper></Wrapper>
      </Section>
    </main>
  );
}

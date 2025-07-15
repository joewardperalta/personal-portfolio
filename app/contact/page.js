import Section from "@/components/Section";
import Headline from "@/components/Headline";
import { Paragraph, Title } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function Page() {
  return (
    <main className="main-content">
      <Section>
        <Wrapper className="pb-5">
          {/* Main headline */}
          <Headline className="flex flex-col gap-4">
            <Title>About Me</Title>
            <Paragraph className="">
              Feel free to reach out if you have a project idea, or any
              questions. You can use the form below for project inquiries.
            </Paragraph>
          </Headline>

          {/* Horizontal line */}
          <div className="border-b border-tertiary-dark w-full border-dashed"></div>
        </Wrapper>
      </Section>
    </main>
  );
}

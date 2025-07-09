import Headline from "@/components/containers/Headline";
import Section from "@/components/containers/Section";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/containers/Wrapper";
import CallToAction from "@/components/containers/CallToAction";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

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
    </main>
  );
}

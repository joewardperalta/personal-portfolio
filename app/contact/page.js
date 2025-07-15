import Section from "@/components/Section";
import Headline from "@/components/Headline";
import { Paragraph, SectionHeading, Title } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Form from "next/form";
import FormInput from "@/components/forms/FormInput";
import { PrimaryButton } from "@/components/Buttons";

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
          <div
            className="border-b border-tertiary-dark w-full 
          border-dashed"
          ></div>
        </Wrapper>
      </Section>

      {/* Forms and contacts section */}
      <Section>
        <Wrapper className="flex-row">
          {/* Project inquiry */}
          <div
            className="p-4 border border-dashed border-tertiary-dark 
          rounded-lg w-full"
          >
            <SectionHeading className="mb-5 text-">
              Project Inquiry
            </SectionHeading>
            {/* Input name */}
            <Form className="text-secondary space-y-5">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name">Name</label>
                <FormInput
                  id="name"
                  name="name"
                  className="text-tertiary-dark"
                  type="text"
                  placeholder="Emilio Bruce"
                  required
                />
              </div>

              {/* Input email */}
              <div className="flex flex-col gap-2.5">
                <label>Email</label>

                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@gmail.com"
                  required
                />
              </div>

              {/* Input website link */}
              <div className="flex flex-col gap-2.5">
                <label htmlFor="url">Existing website (optional)</label>

                <FormInput
                  id="url"
                  name="url"
                  type="url"
                  placeholder="https://www.example.com/"
                  pattern="https://.*"
                />
              </div>

              {/* Input project details */}
              <div className="flex flex-col gap-2.5 ">
                <label htmlFor="details">Project details</label>
                <div
                  className="border border-tertiary-dark p-2.5 
                rounded-md bg-primary-light h-fit "
                >
                  <textarea
                    id="details"
                    name="details"
                    placeholder="Website design..."
                    className="w-full h-full min-h-[9.75rem] 
                    focus:outline-0 focus:border-tertiary 
                    placeholder-tertiary"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Input project timeline */}
              <div className="flex flex-col gap-2.5">
                <label htmlFor="details">Project timeline</label>
                <div
                  className="border border-tertiary-dark 
              rounded-md bg-primary-light pr-2.5"
                >
                  <select
                    id="timeline"
                    name="timeline"
                    className="text-tertiary placeholder-tertiary 
                    w-full h-full p-2.5 focus-visible:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select timeline...
                    </option>
                    <option value="1 week">1 week</option>
                    <option value="2-3 weeks">2-3 weeks</option>
                    <option value="3-4 weeks">3-4 weeks</option>
                  </select>
                </div>
              </div>

              <PrimaryButton className="w-full" type="submit">
                Send Inquiry
              </PrimaryButton>
            </Form>
          </div>

          {/* Contact information */}
          <div className="w-full"></div>
        </Wrapper>
      </Section>
    </main>
  );
}

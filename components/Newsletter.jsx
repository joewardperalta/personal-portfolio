import Form from "next/form";
import FormInput from "@/components/forms/FormInput";
import { PrimaryButton } from "@/components/Buttons";
import Flex from "./Flex";
import Headline from "./Headline";
import { SectionHeading, Paragraph } from "./Typography";

export default function Newsletter() {
  return (
    <div className="px-8 py-16 bg-primary-light border border-dashed rounded-lg">
      <Flex direction="column" alignItems="center">
        <Headline className="text-center space-y-3">
          <SectionHeading>Sign up to my newsletter</SectionHeading>
          <Paragraph className="max-w-[340px]">
            Stay up to date with my latest blog posts and exclusive offers.
          </Paragraph>
        </Headline>
        <NewsletterForm />
      </Flex>
    </div>
  );
}

function NewsletterForm() {
  return (
    <Form className="space-x-2 w-fit">
      <FormInput placeholder="email@gmail.com" type="text" />
      <PrimaryButton type="submit">Sign up</PrimaryButton>
    </Form>
  );
}

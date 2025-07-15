import Form from "next/form";
import FormInput from "@/components/forms/FormInput";
import { PrimaryButton } from "@/components/Buttons";
import Headline from "./Headline";
import { SectionHeading, Paragraph } from "./Typography";

export default function Newsletter() {
  return (
    <div className="px-8 py-16 bg-primary-light border border-dashed rounded-lg flex flex-col items-center gap-8">
      {/* Main headlin */}
      <Headline className="flex flex-col gap-4 text-center items-center">
        <SectionHeading>Sign up to my newsletter</SectionHeading>
        <Paragraph className="max-w-[21.25rem]">
          Stay up to date with my latest blog posts and exclusive offers.
        </Paragraph>
      </Headline>

      <NewsletterForm />
    </div>
  );
}

function NewsletterForm() {
  return (
    <Form className="space-x-2 w-fit">
      <FormInput
        type="email"
        id="email"
        name="email"
        placeholder="email@gmail.com"
      />
      <PrimaryButton type="submit">Sign up</PrimaryButton>
    </Form>
  );
}

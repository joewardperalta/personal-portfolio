import Form from "next/form";
import FormInput from "./FormInput";
import { PrimaryButton } from "../Buttons";

export default function NewsletterForm() {
  return (
    <Form className="space-x-2 w-fit" action="/search">
      <FormInput placeholder="email@gmail.com" type="text" />
      <PrimaryButton type="submit">Sign up</PrimaryButton>
    </Form>
  );
}

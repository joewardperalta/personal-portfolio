"use client";
import Form from "next/form";
import FormInput from "./forms/FormInput";
import { MagnifyingGlass } from "@/components/icons";

export default function Search({ inputChange, projects }) {
  return (
    <Form>
      <div className="relative w-full">
        <FormInput placeholder="Search Projects..." onChange={inputChange} />
        <div className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2">
          <MagnifyingGlass className="" />
        </div>
      </div>
    </Form>
  );
}

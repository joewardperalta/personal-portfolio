"use client";
import Link from "next/link";
import Image from "next/image";
import { SubHeading, Paragraph } from "@/components/typography";

/**
 * Renders an individual project's thumbnail and metadata
 *
 * @param {Object} data - Project object
 *
 * @returns Rendered list element with data from each project object
 */
export default function ProjectCard({ data }) {
  return (
    <li className="w-full h-full relative">
      <Link
        className="rounded-md overflow-hidden block relative border 
        border-tertiary-dark group"
        href={data.caseStudyUrl}
      >
        {/* Data image */}
        <Image
          className="w-full h-full transition-all duration-300 
          group-hover:scale-105"
          src={data.photo.src}
          alt=""
          width={1920}
          height={1080}
          priority
        />

        {/* Data details */}
        <div className="absolute left-0 bottom-0 w-full p-2 ">
          <div
            className="flex justify-between w-full p-2 bg-primary 
            rounded-sm capitalize border border-tertiary-dark"
          >
            <SubHeading>{data.title}</SubHeading>
            <Paragraph className="text-sm">{data.category}</Paragraph>
          </div>
        </div>
      </Link>
    </li>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SubHeading, Paragraph } from "@/components/Typography";

/**
 * ProjectCard Component
 * ---------------------
 * Renders an individual project's thumbnail and metadata
 *
 * @param {Object} project - Project object
 *
 * @returns Rendered list element with data for each project
 */
export default function ProjectCard({ project }) {
  return (
    <li className="w-full relative">
      <Link
        className="rounded-md overflow-hidden block relative border 
        border-tertiary-dark group"
        href={project.caseStudyLink}
      >
        {/* Project image */}
        <Image
          className="w-full h-full transition-all duration-300 
          group-hover:scale-105"
          src={project.photo.src}
          width={1920}
          height={1080}
          alt={project.photo.alt}
        />

        {/* Project details */}
        <div className="absolute left-0 bottom-0 w-full p-2 ">
          <div
            className="flex justify-between w-full p-2 bg-primary 
            rounded-sm capitalize border border-tertiary-dark"
          >
            <SubHeading>{project.title}</SubHeading>
            <Paragraph className="text-sm">{project.type}</Paragraph>
          </div>
        </div>
      </Link>
    </li>
  );
}

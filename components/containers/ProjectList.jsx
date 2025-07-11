import Link from "next/link";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";
import SubHeading from "../typography/SubHeading";

/**
 * ProjectList Component
 * ---------------------
 * Renders a list of projects using the ProjectCard component.
 *
 * @param {Array} projects - Array of project objects.
 *
 * @returns {JSX.Element} Rendered list of ProjectCard component.
 */
export default function ProjectList({ projects }) {
  return (
    <ul
      className={`p-3 border border-dashed border-tertiary-dark 
        rounded-lg flex gap-3`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}

/**
 * ProjectCard Component
 * ---------------------
 * Renders an individual project's thumbnail and metadata
 *
 * @param {Object} project - Project object
 *
 * @returns Rendered list element with data for each project
 */
function ProjectCard({ project }) {
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
            className="flex justify-between w-full px-2 py-2 bg-primary 
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

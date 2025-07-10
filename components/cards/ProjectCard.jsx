import Link from "next/link";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";
import SubHeading from "../typography/SubHeading";

export default function ProjectCard({
  image = { src: "/", alt: "Project card image" },
  href = "/",
  title,
  type,
}) {
  return (
    <li className="w-full relative">
      <Link
        className="rounded-md overflow-hidden block relative border border-tertiary-dark group"
        href={href}
      >
        {/* Project image */}
        <Image
          className="w-full h-full transition-all duration-300 group-hover:scale-105"
          src={image.src}
          width={1920}
          height={1080}
          alt={image.alt}
        />

        {/* Project details */}
        <div className="absolute left-0 bottom-0 w-full p-2 ">
          <div
            className="flex justify-between w-full px-2 py-2 bg-primary 
            rounded-sm capitalize border border-tertiary-dark"
          >
            <SubHeading>{title}</SubHeading>
            <Paragraph className="text-sm">{type}</Paragraph>
          </div>
        </div>
      </Link>
    </li>
  );
}

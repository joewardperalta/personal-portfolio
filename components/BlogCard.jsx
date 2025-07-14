import { Paragraph, SubHeading } from "@/components//Typography";
import Image from "next/image";
import Link from "next/link";
import formatDate from "@/utils/formatDate";

/**
 * Renders an individual blog's thumbnail and metadata
 *
 * @param {Object} data - Skill object
 *
 * @returns Rendered list element with data from each blog object
 */
export default function BlogCard({ data }) {
  const datePosted = formatDate(data.endDate);

  return (
    <article>
      <Link
        className="rounded-md overflow-hidden block relative border 
        border-tertiary-dark group"
        href={data.pageLink}
      >
        <div className="overflow-hidden">
          <Image
            className="w-full h-full object-cover transition-all duration-300 
          group-hover:scale-105"
            src={data.photo.src}
            alt={data.photo.alt}
            width={1600}
            height={1200}
          />
        </div>

        <div className="px-3 py-[1.125rem]">
          <Paragraph className="text-sm mb-4 pb-1 border-b border-dashed  border-tertiary-dark">
            {datePosted}
          </Paragraph>
          <SubHeading className="!text-base">{data.title}</SubHeading>
        </div>
      </Link>
    </article>
  );
}

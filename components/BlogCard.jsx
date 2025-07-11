import { Paragraph, SubHeading } from "@/components//Typography";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article>
      <Link
        className="rounded-md overflow-hidden block relative border 
        border-tertiary-dark group"
        href={blog.pageLink}
      >
        <div>
          <Image
            className="w-full h-full object-cover transition-all duration-300 
          group-hover:scale-105"
            src={blog.photo.src}
            alt={blog.photo.alt}
            width={1600}
            height={1200}
          />
        </div>

        <div className="px-3 py-[1.125rem]">
          <Paragraph className="text-sm mb-4 pb-1 border-b border-dashed  border-tertiary-dark">
            {blog.datePosted}
          </Paragraph>
          <SubHeading className="!text-base">{blog.head.title}</SubHeading>
        </div>
      </Link>
    </article>
  );
}

import Image from "next/image";
import SubHeading from "../typography/SubHeading";
import Paragraph from "../typography/Paragraph";
import Link from "next/link";

export default function SkillCard({ className, icon, title, role, href = "" }) {
  return (
    <li className={`w-full ${className}`}>
      <Link className="flex items-center group" href={href} target="blank">
        {/* SVG */}
        <div
          className="w-[52px] h-[52px] p-2 border border-dashed 
        border-tertiary-dark rounded-lg group-hover:border-secondary 
        transition-all duration-300"
        >
          {icon}
        </div>

        <div className="ml-3">
          <SubHeading className="mb-0.5">{title}</SubHeading>
          <Paragraph className="text-sm">{role}</Paragraph>
        </div>
      </Link>
    </li>
  );
}

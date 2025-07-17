import { Paragraph, SubHeading } from "./typography";

export default function ExperienceCard({
  role,
  company,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full space-y-2">
        <SubHeading className="!text-base">{role}</SubHeading>
        <div className="text-sm flex divide-x divide-tertiary-dark">
          <Paragraph className="pr-1.5">{company}</Paragraph>
          <Paragraph className="pl-1.5">
            {startDate} - {endDate}
          </Paragraph>
        </div>
      </div>

      <div className="w-full">
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}

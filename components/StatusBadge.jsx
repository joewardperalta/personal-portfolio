import { Paragraph } from "./typography";

export default function StatusBadge({ status }) {
  return (
    <div
      className="flex gap-2 items-center px-3 py-2 bg-primary-light 
    rounded-md text-sm text-white w-fit"
    >
      <div>
        <div className="rounded-full bg-green-500 w-2 h-2"></div>
      </div>
      <Paragraph>{status}</Paragraph>
    </div>
  );
}

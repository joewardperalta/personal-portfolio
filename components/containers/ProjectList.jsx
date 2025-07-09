export default function ProjectList({ children, className }) {
  return (
    <ul
      className={`p-3 border border-dashed border-tertiary-dark rounded-lg flex gap-3 ${className}`}
    >
      {children}
    </ul>
  );
}

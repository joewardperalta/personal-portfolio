export default function StackList({ children, className }) {
  return <ul className={`grid grid-cols-4 gap-4 ${className}`}>{children}</ul>;
}

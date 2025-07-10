export default function SubHeading({ children, className }) {
  return <h3 className={`text-sm text-white ${className}`}>{children}</h3>;
}

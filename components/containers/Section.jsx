export default function Section({ children, className }) {
  return <section className={`px-8 ${className}`}>{children}</section>;
}

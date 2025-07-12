export default function Headline({ children, className = "" }) {
  return <div className={`w-full ${className}`}>{children}</div>;
}

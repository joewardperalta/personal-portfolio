export default function Wrapper({ children, className }) {
  return <div className={`pt-16 pb-8 mx-8 ${className}`}>{children}</div>;
}

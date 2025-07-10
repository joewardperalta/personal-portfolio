import Button from "./Button";

export default function SecondaryButton({ children, className }) {
  return <Button className={`secondary-btn ${className}`}>{children}</Button>;
}

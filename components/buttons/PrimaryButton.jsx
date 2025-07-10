import Button from "./Button";

export default function PrimaryButton({ children, className }) {
  return <Button className={`primary-btn ${className}`}>{children}</Button>;
}

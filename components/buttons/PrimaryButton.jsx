import Button from "./Button";

export default function PrimaryButton({ children, className }) {
  return (
    <Button
      className={`bg-secondary text-primary hover:bg-secondary-dark duration-300 ${className}`}
    >
      {children}
    </Button>
  );
}

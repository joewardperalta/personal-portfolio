import Button from "./Button";

export default function PrimaryButton({ children, className }) {
  return (
    <Button
      className={`bg-secondary text-primary hover:bg-primary hover:text-secondary duration-300 ${className}`}
    >
      {children}
    </Button>
  );
}

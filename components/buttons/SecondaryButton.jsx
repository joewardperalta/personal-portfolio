import Button from "./Button";

export default function SecondaryButton({ children, className }) {
  return (
    <Button
      className={`bg-primary-light text-white hover:bg-primary duration-300 ${className}`}
    >
      {children}
    </Button>
  );
}

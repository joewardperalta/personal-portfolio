import Button from "./Button";

export default function SecondaryButton({ children, className }) {
  return (
    <Button
      className={`bg-primary-light text-white hover:bg-primary font-regular duration-300 ${className}`}
    >
      {children}
    </Button>
  );
}

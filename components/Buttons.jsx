function Button({ children, className, type }) {
  return (
    <button type={type} className={`btn ${className}`}>
      {children}
    </button>
  );
}

export function PrimaryButton({ children, className, type }) {
  return (
    <Button type={type} className={`primary-btn ${className}`}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, className }) {
  return <Button className={`secondary-btn ${className}`}>{children}</Button>;
}

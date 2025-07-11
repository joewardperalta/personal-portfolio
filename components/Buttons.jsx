function Button({ children, className }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

export function PrimaryButton({ children, className }) {
  return <Button className={`primary-btn ${className}`}>{children}</Button>;
}

export function SecondaryButton({ children, className }) {
  return <Button className={`secondary-btn ${className}`}>{children}</Button>;
}

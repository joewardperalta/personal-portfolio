export default function Title({ children, className }) {
  return (
    <h1
      className={`text-secondary font-semibold text-5xl leading-[1.2] mb-3 ${className}`}
    >
      {children}
    </h1>
  );
}

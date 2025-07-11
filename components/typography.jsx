export function Paragraph({ children, className }) {
  return <p className={` ${className}`}>{children}</p>;
}

export function SectionHeading({ children, className }) {
  return (
    <h2 className={`text-2xl text-secondary capitalize ${className}`}>
      {children}
    </h2>
  );
}

export function SubHeading({ children, className }) {
  return <h3 className={`text-sm text-white ${className}`}>{children}</h3>;
}

export function Title({ children, className }) {
  return (
    <h1
      className={`text-secondary font-semibold text-5xl leading-[1.2] mb-3 ${className}`}
    >
      {children}
    </h1>
  );
}

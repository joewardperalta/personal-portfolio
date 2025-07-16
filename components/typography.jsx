export function Title({ children, className }) {
  return (
    <h1
      className={`text-secondary font-semibold text-5xl leading-[1.2] ${className}`}
    >
      {children}
    </h1>
  );
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

export function Paragraph({ children, className }) {
  return <p className={`max-w-[36rem] text-left ${className}`}>{children}</p>;
}

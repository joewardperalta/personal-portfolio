export default function Wrapper({ children, className }) {
  return (
    <div
      className={`py-15 max-w-[1200px] mx-auto flex flex-col gap-8 ${className}`}
    >
      {children}
    </div>
  );
}

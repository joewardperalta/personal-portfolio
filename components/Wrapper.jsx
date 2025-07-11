export default function Wrapper({ children, className }) {
  return (
    <div className={`py-15 max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

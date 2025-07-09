export default function Wrapper({ children, className }) {
  return (
    <div className={`pt-16 pb-8 max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

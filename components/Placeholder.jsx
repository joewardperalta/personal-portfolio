export default function Placeholder({ className }) {
  return (
    <div
      className={`w-full h-[200px] bg-primary-light animate-pulse 
          rounded-lg ${className}`}
    ></div>
  );
}

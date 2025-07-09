export default function Button({ children, className }) {
  return (
    <button
      className={`px-4 py-2 text-sm font-bold rounded-lg capitalize cursor-pointers border border-tertiary-dark ${className}`}
    >
      {children}
    </button>
  );
}

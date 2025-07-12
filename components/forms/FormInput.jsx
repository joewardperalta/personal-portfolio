export default function FormInput({ type, placeholder }) {
  return (
    <input
      id="email"
      name="email"
      autoComplete="true"
      type={type}
      placeholder={placeholder}
      className="border border-tertiary-dark rounded-md text-sm p-2.5 focus:outline-0 focus:border-tertiary text-white h-full w-[37rem] max-w-[18rem]"
    ></input>
  );
}

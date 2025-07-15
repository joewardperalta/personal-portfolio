export default function FormInput({
  id,
  name,
  type,
  required = false,
  placeholder,
  onChange,
}) {
  return (
    <input
      id={id}
      name={name}
      autoComplete="true"
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-tertiary-dark rounded-md text-sm p-2.5 focus:outline-0 focus:border-tertiary bg-primary-light text-white placeholder-tertiary h-full w-full"
    ></input>
  );
}

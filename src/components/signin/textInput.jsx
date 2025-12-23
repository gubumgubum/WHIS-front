export default function TextInput({
  placeholder,
  type = 'text',
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[408px] h-[50px] border border-[#818181] rounded-xl p-3 focus:outline-none focus:border-black"
    />
  );
}

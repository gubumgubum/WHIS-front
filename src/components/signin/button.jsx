export default function Button({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-[25.5rem] h-[3.125rem] text-white font-semibold rounded-[1.25rem] ${className}`}
    >
      {children}
    </button>
  );
}

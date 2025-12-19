import Plus from '../../assets/icon/plus';

export default function CreatePost({ className }) {
  return (
    <div
      className={`w-[50px] h-[50px] rounded-full border border-[#818181] bg-[#DDA67E] flex justify-center items-center ${className}`}
    >
      <Plus />
    </div>
  );
}

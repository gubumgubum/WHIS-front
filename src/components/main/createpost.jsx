import { Link } from 'react-router-dom';
import Plus from '../../assets/icon/Plus';

export default function CreatePost({ className }) {
  return (
    <Link
      to="/create-post"
      className={`w-[50px] h-[50px] rounded-full border border-[#818181] bg-[#DDA67E] flex justify-center items-center ${className}`}
    >
      <Plus color="white" width="25" height="25" />
    </Link>
  );
}

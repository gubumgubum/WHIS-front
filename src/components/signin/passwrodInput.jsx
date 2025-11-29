import { useState } from 'react';
import EyeOff from '../../assets/img/eyeOff';
import EyeOn from '../../assets/img/eyeOn';

export default function PasswordInput({ placeholder }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative w-[25.5rem]">
      <input
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        className="w-[25.5rem] h-[3.125rem] border border-[#818181] rounded-xl p-4 focus:outline-none focus:border-black"
      />
      <span
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        {show ? <EyeOn /> : <EyeOff />}
      </span>
    </div>
  );
}

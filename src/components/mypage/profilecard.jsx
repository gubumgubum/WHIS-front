import { useState } from 'react';
import Pencil from '../../assets/icon/pencil';
import defaultProfile from '../../assets/img/defaultImage.png';

export default function ProfileCard() {
  const [preview, setPreview] = useState(defaultProfile);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <label
      htmlFor="profileUpload"
      className="relative group cursor-pointer w-[100px] h-[100px]"
    >
      <img
        src={preview}
        alt="profile"
        className="w-[100px] h-[100px] rounded-full object-cover border border-black"
      />
      <div
        className="
          absolute inset-0 rounded-full
          bg-black/20 w-[100px] h-[100px]
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity
        "
      >
        <Pencil />
      </div>
      <input
        type="file"
        id="profileUpload"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </label>
  );
}

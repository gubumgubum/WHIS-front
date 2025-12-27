import { useState } from 'react';
import Recycle from '../../assets/icon/recycle';
import LinkIcon from '../../assets/icon/link';

export default function LinkAdd() {
  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState('');

  const addLink = () => {
    if (linkInput.trim()) {
      setLinks([...links, linkInput]);
      setLinkInput('');
    }
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <input
          type="text"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          placeholder="링크 URL을 입력하세요"
          className="flex w-[350px] h-[50px] p-4 border border-[#818181] rounded-xl focus:outline-none font-pretendard placeholder:text-[#818181] text-black"
        />
        <button
          onClick={addLink}
          className="flex items-center justify-center gap-2 w-[130px] h-[50px] border border-[#818181] rounded-xl font-pretendard text-[#818181] "
        >
          <LinkIcon /> 링크 추가
        </button>
      </div>
      <div className="flex flex-col">
        {links.map((link, index) => (
          <div
            key={index}
            className="group relative flex items-center w-[500px] h-[50px] p-4 border border-black rounded-xl text-black mt-[10px]"
          >
            <span className="truncate pr-10">{link}</span>
            <button
              onClick={() => removeLink(index)}
              className="absolute right-4 text-black group-hover:text-red-500 transition-colors outline-none"
            >
              <Recycle />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import Plus from '../../assets/icon/Plus';
import Recycle from '../../assets/icon/recycle';
import FileIcon from '../../assets/icon/file';

export default function FileAdd({ onFileChange = () => {} }) {
  const [files, setFiles] = useState([]);

  const addFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFiles([...files, file.name]);
    onFileChange(file); // 🔥 부모로 실제 File 전달
  };

  const removeItem = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    onFileChange(null); // 🔥 파일 제거 시 부모도 초기화
  };

  return (
    <div className="flex flex-col gap-[10px] font-pretendard">
      <label className="relative flex items-center w-[500px] h-[50px] p-4 pl-[43px] bg-white border border-[#818181] rounded-xl text-[#818181] cursor-pointer">
        <input type="file" className="hidden" onChange={addFile} />
        <span className="absolute left-4">
          <FileIcon color="#818181" />
        </span>
        <span>파일 추가</span>
        <span className="absolute right-4">
          <Plus color="#818181" width={9} height={9} />
        </span>
      </label>

      {files.map((file, index) => (
        <div
          key={index}
          className="relative flex items-center bg-white w-[500px] h-[50px] p-4 border border-[#818181] rounded-xl"
        >
          <span className="truncate pr-10">{file}</span>
          <button
            type="button"
            onClick={() => removeItem(index)}
            className="absolute right-4 hover:text-red-500"
          >
            <Recycle />
          </button>
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import Plus from '../../assets/icon/plus';
import Recycle from '../../assets/icon/recycle';
import FileIcon from '../../assets/icon/file';

export default function FileAdd() {
  const [files, setFiles] = useState([]);

  const addFile = (e) => {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
      setFiles([...files, fileName]);
    }
  };

  const removeItem = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col gap-[10px] font-pretendard">
      <label className="relative flex items-center w-[500px] h-[50px] p-4 pl-[32px] border border-[#818181] rounded-xl text-[#818181] cursor-pointer group">
        <input type="file" className="hidden" onChange={addFile} />
        <span className="absolute left-4 flex items-center justify-center w-6 h-6">
          <FileIcon />
        </span>
        <span className="flex">파일 추가</span>
        <span className="absolute right-4 flex items-center justify-center">
          <Plus color="#818181" width={9} height={9} />
        </span>
      </label>

      {files.map((file, index) => (
        <div
          key={index}
          className="group relative flex items-center w-[500px] h-[50px] p-4 border border-black rounded-xl text-black"
        >
          <span className="truncate pr-10">{file}</span>
          <button
            onClick={() => removeItem(index, 'file')}
            className="absolute right-4 text-black group-hover:text-red-500 transition-colors outline-none"
          >
            <Recycle />
          </button>
        </div>
      ))}
    </div>
  );
}

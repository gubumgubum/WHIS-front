function Dtextarea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="내용을 입력하세요"
      className="font-pretendard placeholder:text-gray-500 w-[500px] h-[300px] p-4 mb-[15px] border border-[#818181] rounded-xl resize-none focus:outline-none"
    />
  );
}

export default Dtextarea;

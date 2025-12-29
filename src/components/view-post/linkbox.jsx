export default function LinkBox({ links = [] }) {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[500px] h-[50px] border border-black px-4 py-4
          flex justify-between items-center rounded-xl"
        >
          <p className="font-pretendard truncate">{link}</p>
        </a>
      ))}
    </>
  );
}

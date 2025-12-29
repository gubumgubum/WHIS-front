import Download from '../../assets/icon/download';

export default function FileDownload({ files = [] }) {
  return (
    <>
      {files.map((fileUrl, index) => {
        const fileName = decodeURIComponent(fileUrl.split('/').pop());

        return (
          <a
            key={index}
            href={fileUrl}
            download
            className="w-[500px] h-[50px] border border-black px-4 py-4
            flex justify-between items-center rounded-xl"
          >
            <p className="font-pretendard truncate">{fileName}</p>
            <Download />
          </a>
        );
      })}
    </>
  );
}

import { Link } from 'react-router-dom';

export default function InfoCard({
  title,
  description,
  image,
  imageAlt = ',',
  to = '/',
}) {
  return (
    <Link
      to={to}
      className="flex flex-col bg-[#FFEEE1] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
    >
      <p className="font-pretendard font-extrabold">{title}</p>
      <p className="font-pretendard text-[10px] mb-[21px]">{description}</p>
      <div className="flex justify-end">
        <img src={image} alt={imageAlt} className="w-[62px]" />
      </div>
    </Link>
  );
}

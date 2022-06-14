import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="px-4 py-5 bg-white rounded-md drop-shadow-md">
      <Image src={data.icon} alt="icon" height={35} />
      <h2 className="mb-2 text-base md:text-lg font-medium">{data.title}</h2>
      <p className="text-xs md:text-sm">{data.description}</p>
    </div>
  );
};

export default Card;

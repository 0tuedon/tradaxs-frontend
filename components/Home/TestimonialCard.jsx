import Image from "next/image";

const TestimonialCard = ({ data }) => {
  return (
    <div className="relative px-4 py-5 bg-white rounded-md shadow-md pt-10">
      <div className="absolute left-3 -top-8 h-16 w-16 rounded-full overflow-hidden">
        <Image
          src="/eye-for-ebony-aZzXKGcyWqk-unsplash.jpg"
          alt="picture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <h2 className="mb-2 text-base md:text-lg font-medium">Alex</h2>
      <p className="text-xs md:text-sm">
        Tradax has been helpful. they train you on trading and allow you buy and
        sell crypto
      </p>
    </div>
  );
};

export default TestimonialCard;

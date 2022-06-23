import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <div className="shadow-md rounded-md overflow-hidden bg-white">
      <div className="relative h-32 w-full">
        <Image
          src="/icons8-team-yTwXpLO5HAA-unsplash.jpg"
          alt="news"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="p-3">
        <h1 className="text-sm font-medium">This week in crypto</h1>
        <p className="text-xs opacity-70 mb-3">Dec 23 ,2021</p>
        <p className="text-xs opacity-70">
          Bitcoin is up 5% , Etherum is up 12% , El salvador buy the “deep” and
          more...
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

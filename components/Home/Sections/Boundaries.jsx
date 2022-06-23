import Card from "../Card";
import { data } from "../../../data/static/BoundariesData";
import Image from "next/image";
import { Group } from "../../../assets/svg/";

const Boundaries = () => {
  return (
    <section className="bg-gradient-to-tr from-[#F8F9FB] to-[#FAFBFF]">
      <div className="p-10 bg-white md:px-20">
        <div className="mx-auto mb-10 w-fit">
          <Image src={Group} alt="crypto currenies" priority width={800} />
        </div>
        <h1 className="max-w-2xl mx-auto text-2xl font-semibold text-center md:text-4xl text-accent">
          Tradaxs is breaking the boundaries of digital currency trading
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 p-10 mt-10 md:px-20 sm:grid-cols-2 md:gap-10 md:grid-cols-3 ">
        {data.map((item, id) => {
          return <Card key={id} data={item} />;
        })}
      </div>
    </section>
  );
};

export default Boundaries;

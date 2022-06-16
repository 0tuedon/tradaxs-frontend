import Image from "next/image";
import { Hero_img, Group } from "../../../assets/svg/";
import EmailForm from "../Form";

const Hero = () => {
  return (
    <section className="mb-16">
      <div className="items-start justify-between space-y-5 md:space-y-10 lg:space-y-0 lg:flex">
        <div className="max-w-xl mx-auto text-center lg:text-left">
          <h1 className="mb-3 text-4xl font-semibold md:text-6xl leading-snug">
            Learn and trade your crypto with{" "}
            <span className="text-accent">tradaxs</span>
          </h1>
          <p className="mb-5 text-sm lg:text-base">
            Get trained and exchange digital currencies using different payment
            methods with us. Create your tradax account to begin
          </p>
          <EmailForm />
        </div>
        <div className="relative grid w-full place-items-center">
          <Image src={Hero_img} alt="hero image" priority />
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-10 justify-evenly">
        <Image src={Group} alt="crypto currenies" priority />
      </div>
    </section>
  );
};

export default Hero;

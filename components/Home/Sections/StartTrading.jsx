import Link from "next/link";

const StartTrading = () => {
  return (
    <section className="min-h-[50vh]">
      <h1 className="text-2xl font-semibold text-center md:text-3xl text-accent">
        Start trading on tradaxs
      </h1>
      <div className="rounded-md shadow-md max-w-3xl mx-auto min-h-[30vh] px-3 py-5">
        <div>
          <span>
            <h2>Buy</h2>
          </span>
        </div>
        <p className="text-xs md:text-sm text-center mb-5">
          To use this feature, you need to create an account
        </p>
        <Link passHref href="/">
          <a className="block w-fit mx-auto bg-accent rounded-md px-5 py-2 text-sm text-white">
            Create account
          </a>
        </Link>
      </div>
    </section>
  );
};

export default StartTrading;

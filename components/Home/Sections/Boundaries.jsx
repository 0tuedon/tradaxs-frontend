import Card from "../Card";
import { data } from "../../../data/static/BoundariesData";

const Boundaries = () => {
  return (
    <section className="mb-16">
      <h1 className="max-w-2xl mx-auto text-2xl font-semibold text-center md:text-3xl text-accent">
        Tradaxs is breaking the boundaries of digital currency trading
      </h1>
      <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10 md:grid-cols-3">
        {data.map((item, id) => {
          return <Card key={id} data={item} />;
        })}
      </div>
    </section>
  );
};

export default Boundaries;

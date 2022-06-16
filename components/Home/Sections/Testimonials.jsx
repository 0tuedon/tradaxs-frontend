import React from "react";
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
  return (
    <section className="min-h-[50vh]">
      <h1 className="text-2xl font-semibold text-center md:text-3xl text-accent">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 gap-5 mt-20 sm:grid-cols-2 gap-y-14 md:gap-16 lg:grid-cols-3">
        {Array(6)
          .fill()
          .map((item, id) => {
            return <TestimonialCard key={id} />;
          })}
      </div>
    </section>
  );
};

export default Testimonials;

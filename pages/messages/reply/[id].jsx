import React from "react";
import Transactions from "../../../components/Dashboard/Transactions";
import AuthLayout from "../../../components/Layouts/AuthLayout";
import ReplyCard from "../../../components/Message/ReplyCard";

const reply = () => {
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <ReplyCard />
      </section>
    </AuthLayout>
  );
};

export default reply;

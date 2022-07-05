import React from "react";
import Transactions from "../../components/Dashboard/Transactions";
import AuthLayout from "../../components/Layouts/AuthLayout";
import MessageCard from "../../components/Message/MessageCard";

const Messages = () => {
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="space-y-[1.375rem] max-w-[35.8rem] mb-24">
          <MessageCard />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Messages;

import React from "react";

const NotificationModal = () => {
  return (
    <div className="z-50 absolute rounded-[0.625rem] -right-5 sm:right-0 top-10 notificationModal w-80 md:w-[25.8rem] h-[30rem]">
      <h2 className="text-xs font-medium text-[#B1AFCD] mt-[1.6875rem] pl-[1.5625rem]">
        Notifications
      </h2>
      <p className="absolute text-xs text-[#B1AFCD] -translate-x-1/2 top-20 left-1/2">
        You have no notification
      </p>
    </div>
  );
};

export default NotificationModal;

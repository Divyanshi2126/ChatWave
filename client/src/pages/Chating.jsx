import React from "react";
import ContactBar from "../components/chat/ContactBar";
import ChatWindow from "../components/chat/ChatWindow";
import QuickNavigation from "../components/chat/QuickNavigation";

const Chating = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex bg-base-200">

      {/* LEFT CONTACT LIST */}
      <div className="w-[320px] border-r border-base-300 bg-base-100">
        <ContactBar />
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="flex flex-col flex-1">

        <ChatWindow />

        <QuickNavigation />

      </div>

    </div>
  );
};

export default Chating;
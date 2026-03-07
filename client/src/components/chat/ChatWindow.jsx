import React from "react";

const ChatWindow = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-base-100">

      {/* CHAT HEADER */}
      <div className="flex items-center gap-3 pb-4 border-b border-base-300 mb-6">

        <div className="avatar placeholder">
          <div className="bg-primary text-primary-content rounded-full w-10">
            <span>R</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Riya Sharma</h3>
          <p className="text-xs opacity-70">Online</p>
        </div>

      </div>

      {/* MESSAGES */}
      <div className="space-y-4">

        <div className="chat chat-start">
          <div className="chat-bubble">
            Hey! How are you?
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-primary">
            I'm good 😄 Working on ChatWave.
          </div>
        </div>

        <div className="chat chat-start">
          <div className="chat-bubble">
            That sounds awesome 🚀
          </div>
        </div>

      </div>

    </div>
  );
};

export default ChatWindow;
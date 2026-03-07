import React, { useState } from "react";

const QuickNavigation = () => {

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    console.log("Send:", message);
    setMessage("");
  };

  return (
    <div className="bg-base-100 border-t border-base-300 p-4 flex gap-3">

      <input
        type="text"
        placeholder="Type a message..."
        className="input input-bordered w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="btn btn-primary"
      >
        Send
      </button>

    </div>
  );
};

export default QuickNavigation;
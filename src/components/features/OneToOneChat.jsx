import React, { useState } from "react";
import { useChat } from "../../api/useChat";
import { Button } from "../common/Button.component";

export const OneToOneChat = () => {
  const { createChat } = useChat();
  const [inputValue, setInputValue] = useState("");

  const handleSendChat = () => {
    if (!inputValue.trim()) return;
    createChat(inputValue);
    setInputValue(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 text-white text-lg font-semibold p-4 shadow-md text-center">
        One-to-One Chat
      </div>

      {/* Chat Box */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-center text-gray-500">No messages yet</p>
        {/* Add messages dynamically here */}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-white shadow-lg flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          onClick={handleSendChat}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

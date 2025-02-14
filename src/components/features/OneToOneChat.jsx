import { useState } from "react";
import { useChat } from "../../api/useChat";
import { Button } from "../common/Button.component";

export const OneToOneChat = () => {
  const { messages, fetchMessages, sendMessage } = useChat();

  const [inputValue, setInputValue] = useState("");
  const chatId = localStorage.getItem("chatId");

  const handleSendChat = async () => {

    await sendMessage(chatId, inputValue);
    await fetchMessages(chatId);
    setInputValue("");
    
  };

  return (
    <div className="flex flex-col h-screen w-96 m-auto bg-gray-100">
      <div className="bg-blue-500 text-white text-lg font-semibold p-4 shadow-md text-center">
        One-to-One Chat
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages?.length > 0 ? (
          messages?.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded-lg ${
                msg.sender._Id === msg.id
                  ? "bg-gray-300 text-black text-right "
                  : "bg-blue-500 text-white text-left"
              }`}
            >
              {msg.content}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages yet</p>
        )}
      </div>

      <div className="p-4 bg-white shadow-lg flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={() => handleSendChat()} className="">
          Send
        </Button>
      </div>
    </div>
  );
};

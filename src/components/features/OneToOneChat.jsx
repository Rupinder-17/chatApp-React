import { useState } from "react";
import { useChat } from "../../api/useChat";
import { FiSend, FiTrash } from "react-icons/fi";

export const OneToOneChat = () => {
  const { messages, fetchMessages, sendMessage, deleteMessage } = useChat();
  const [inputValue, setInputValue] = useState("");
  const chatId = localStorage.getItem("chatId");
  const recevierId = localStorage.getItem("recevierId");

  const handleSendChat = async () => {
    if (inputValue.trim()) {
      await sendMessage(chatId, inputValue);
      setInterval(()=>{
         fetchMessages(chatId);

      },1000)
      setInputValue("");
    }
  };

  const handleDelete = async (messageId) => {
    await deleteMessage(chatId, messageId);
    await fetchMessages(chatId);
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-gray-100 shadow-xl rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white text-xl font-bold p-4 shadow-md">
        One-to-One Chat
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages?.length > 0 ? (
          messages?.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender._id !== recevierId ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 flex items-center gap-3 ${
                  msg.sender._id !== recevierId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                <p className="break-words">{msg.content}</p>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="mt-2 text-xs opacity-50  hover:opacity-100 transition-opacity"
                >
                  <FiTrash size={14} className="text-gray-900  bg-slate-300" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No messages yet</p>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendChat()}
          />
          <button
            onClick={handleSendChat}
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FiSend size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useChat } from "../../api/useChat";
import { Button } from "../common/Button.component";
import { FiSend, FiTrash } from "react-icons/fi";

export const OneToOneChat = () => {
  const { messages, fetchMessages, sendMessage, deleteMessage } = useChat();

  const [inputValue, setInputValue] = useState("");
  const chatId = localStorage.getItem("chatId");
  const recevierId = localStorage.getItem("recevierId");

  const handleSendChat = async () => {
    await sendMessage(chatId, inputValue);
    await fetchMessages(chatId);
    setInputValue("");
  };

  const handleDelete = async (messageId) => {
    console.log("del", messageId);

    await deleteMessage(chatId, messageId);
    await fetchMessages(chatId);
  };

  return (
    <div className="flex flex-col h-screen w-[40%] m-auto bg-gray-100">
      <div className="bg-blue-500 text-white text-lg font-semibold p-4 shadow-md text-center">
        One-to-One Chat
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages?.length > 0 ? (
          messages?.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 w-[80%] rounded-lg ${
                msg.sender._id !== recevierId
                  ? "bg-gray-300 text-black text-right flex-start "
                  : "bg-blue-500 text-white flex-end"
              }`}
            >
              <ul>
                <li>
                  <p>{msg.content}</p>
                  <button onClick={() => handleDelete(msg._id)}>
                    <FiTrash size={18} />
                  </button>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages yet</p>
        )}
      </div>

      <div className="p-4 w-[] bg-white shadow-lg flex items-center">
        <input
          type="text"
          className="flex-1 border w-[] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>
          <Button onClick={() => handleSendChat()} className="">
            <FiSend className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

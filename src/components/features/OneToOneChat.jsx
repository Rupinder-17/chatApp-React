import { useState } from "react";
import { useChat } from "../../api/useChat";
import { Button } from "../common/Button.component";

export const OneToOneChat = () => {
  const { messages, fetchMessages, sendMessage } = useChat();

  const [inputValue, setInputValue] = useState("");
  const chatId = localStorage.getItem("chatId");
  const recevierId = localStorage.getItem("recevierId");
  // console.log("state", chatState);
  

  const handleSendChat = async () => {
    
    // const newChat = await createChat(recevierId);
    // console.log("new", newChat);

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
                msg.senderId === recevierId
                  ? "bg-gray-300 text-black self-start"
                  : "bg-blue-500 text-white self-end"
              }`} 
     > 
        {msg.content}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages yet</p>
        )} 

        <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-center text-gray-500">No messages yet</p>
        </div>
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

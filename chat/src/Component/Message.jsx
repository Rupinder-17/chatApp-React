import { useEffect, useState } from "react";
import { useContextChat } from "../Hooks/useContext";

export const Message = () => {
  const { state, createChat, allMessage, getAllMessage, sendMessage } =
    useContextChat();
  // const { allMessage } = state;
  console.log("messagesend", allMessage);
  console.log(state);

  const [inputValue, setInputValue] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);

  useEffect(() => {
    createChat();
    getAllMessage();
  }, []);
  return (
    <div>
      <div className="p-4 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Chat Messages
        </h1>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 overflow-y-auto h-96 border">
          {allMessage?.data?.length > 0 ? (
            allMessage?.data?.map((msg, index) => {
              // console.log(typeof allMessage);
              const isSent = msg.sender === user.user.username;
              console.log("mmm", msg);

              return (
                <div
                  key={index}
                  className={`p-2 my-2 rounded ${
                    isSent
                      ? "bg-blue-500 text-white self-end text-right"
                      : "bg-gray-200 text-black self-start text-left"
                  }`}
                >
                  <p>{msg.content}</p>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No messages yet.</p>
          )}
        </div>

        <div className="flex mt-4 max-w-md mx-auto">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              console.log("inputValue", inputValue);

              sendMessage(inputValue);
              setInputValue("");
              setTimeout(() => {
                getAllMessage();
              }, 2000);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

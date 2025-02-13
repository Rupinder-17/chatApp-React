import React, { useEffect } from "react";
import { useChat } from "../../api/useChat";
import { usePage } from "../../context/PageContext";
import { PAGES } from "../../constants/pages";

export const OnlineUsers = () => {
  const { onlineUsers, loading, error, fetchOnlineUsers } = useChat();
  const{ setCurrentPage} = usePage()

  useEffect(() => {
    console.log("Fetching online users...");
    fetchOnlineUsers();
  }, []);

  const handleCreateChat = (userId) => {
    console.log("Creating chat with user", userId);
    localStorage.setItem("chatUserId", userId);
    setCurrentPage(PAGES.CHAT)

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Online Users
        </h1>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        <ul className="divide-y divide-gray-200">
          {onlineUsers?.length > 0 ? (
            onlineUsers.map((user,index) => (
              <li
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-100 transition duration-300 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-700 font-medium" onClick={() => handleCreateChat(user._id)}>
                    {user.username}
                  </span>
                </div>
                {/* <span className="text-green-500 text-sm font-semibold">
                  Online
                </span> */}
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No users online</p>
          )}
        </ul>
      </div>
    </div>
  );
};

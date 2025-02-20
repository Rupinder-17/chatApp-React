import { useEffect } from "react";
import { useChat } from "../../api/useChat";
import { PAGES } from "../../constants/pages";
import { usePage } from "../../context/PageContext";

export const UserList = () => {
  const {
    loading,
    error,
    chatList,
    // group,
    getUserChatList,
    createChat,
    createGroupChat,
  } = useChat();
  const {setCurrentPage} = usePage()

  useEffect(() => {
    setTimeout(() => {
      getUserChatList();

    },1000);
  }, []);

const recevierId = localStorage.getItem("recevierId");
  const handleChatWithActiveUser = () => {
    console.log("my user id", recevierId);
    createChat(recevierId);
    createGroupChat()
    setCurrentPage(PAGES.CHAT);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">
          User Chat List
        </h2>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        <ul className="space-y-4">
          {chatList?.data?.length > 0 ? (
            chatList.data.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition duration-300 p-4 rounded-lg shadow-sm cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.isGroupChat
                      ? item.name
                      : item.participants[1].username.charAt(0).toUpperCase()}
                  </div>
                  <span
                    className="text-gray-700 font-semibold text-lg"
                    onClick={ handleChatWithActiveUser}
                  >
                    {item.isGroupChat
                      ? item.name
                      : item.participants[1].username}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No users found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

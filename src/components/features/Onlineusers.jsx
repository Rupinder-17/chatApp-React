import { useEffect, useState } from "react";
import { useChat } from "../../api/useChat";
import { usePage } from "../../context/PageContext";
import { PAGES } from "../../constants/pages";
import { Button } from "../common/Button.component";
import { CheckBox } from "../CheckBox";

export const OnlineUsers = () => {
  const {
    onlineUsers,
    loading,
    error,
    fetchOnlineUsers,
    createChat,
    createGroup,
  } = useChat();
  const { setCurrentPage } = usePage();
  const [selectedUser, setSelectedUser] = useState([]);

  const handleUserSelection = (userId, isChecked) => {
    setSelectedUser((prev) =>
      isChecked ? [...prev, userId] : prev.filter((id) => id !== userId)
    );
  };

  const handleGroup = async () => {
    if (selectedUser.length === 0) {
      alert("Please select at least one user!");
      return;
    }

    const groupName = prompt("Please enter the name of the group:");
    if (!groupName) return;

    await createGroup(groupName, selectedUser);
  };

  
  useEffect(() => {
    fetchOnlineUsers();
  }, []);

  const handleCreateChat = (userId) => {
    localStorage.setItem("recevierId", userId);
    createChat(userId);
    setCurrentPage(PAGES.CHAT);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl">
        <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">
          Online Users
        </h1>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        <div className="flex justify-center mb-4">
          <Button
            onClick={handleGroup}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            Create Group
          </Button>
        </div>

        <ul className="space-y-4">
          {onlineUsers?.length > 0 ? (
            onlineUsers.map((user, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition duration-300 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <CheckBox onSelect={handleUserSelection} userId={user._id} />
                  <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span
                    className="text-gray-700 font-semibold text-lg cursor-pointer hover:text-indigo-600 transition"
                    onClick={() => handleCreateChat(user._id)}
                  >
                    {user.username}
                  </span>
                </div>
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

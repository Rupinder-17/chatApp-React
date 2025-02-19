import { useEffect } from "react";
// import { usePage } from "../../context/PageContext";
import { useChat } from "../../api/useChat";

export const UserList = () => {
  const { loading, error, chatList, group, getUserChatList, createGroup } = useChat();
  console.log("chatlist",chatList);
  console.log("gr" , group);
  

  useEffect(() => {
    getUserChatList();
    createGroup()
  }, []);
  return (
    <div>
      <div>
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}
      </div>
      {chatList?.data?.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
};

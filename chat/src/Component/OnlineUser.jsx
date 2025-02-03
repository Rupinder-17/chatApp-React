import { useEffect } from "react";
import { useContextChat } from "../Hooks/useContext";

export const OnlineUser = () => {
  const { state, onlineuserApi, createChat, setCurrentPage } = useContextChat();
  const { onlineuser } = state;

  useEffect(() => {
    onlineuserApi();
  }, []);

  const handleGetMessage = (user) => {
    if(user?._id){
        createChat(user._id);
        localStorage.setItem("userId", user._id);
        console.log("Chat ID set:", user._id);
        setCurrentPage("message");
    }

  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Online Users
      </h1>
      <div className="gap-4 w-[40%] m-auto px-4">
        {onlineuser?.data?.length > 0 ? (
          onlineuser.data.map((item, id) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded p-4 transition duration-300 ease-in-out border border-gray-200 flex items-center gap-4"
            onClick={()=>{
                console.log("user",item)
                handleGetMessage(item)
            }}
             >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full text-xl font-bold">
                {item.username.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {item.username}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No users online.
          </p>
        )}
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { useContextChat } from "../Hooks/useContext";

export const OnlineUser = () => {
  const { state, onlineuserApi } = useContextChat();
  const { onlineuser } = state;

  useEffect(() => {
    onlineuserApi();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Online Users
      </h1>
      <div className="gap-4">
        {onlineuser?.data?.length > 0 ? (
          onlineuser.data.map((item, id) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded p-4  transition duration-300 ease-in-out border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
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

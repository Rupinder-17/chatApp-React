import { useContextChat } from "../hooks/useContext";
// import { Register } from "../components/Register";
// import { Login } from "./Login";
import { OnlineUser } from "./OnlineUser";
import { Message } from "./Message";
import { Login } from "../components/features/Login.component";
// import { useAuth } from "../api/useAuth";
// import { RegisterCom } from "../components/features/RegisterCom";
import { useAuth } from "../api/useAuth";
// import { Register } from "../components/Register";
import { RegisterCom } from "../components/features/RegisterCom";
export const Index = () => {
  const { state } = useContextChat();
  const {logout, user} = useAuth();
  console.log("res", state);

  const confirmLogout = () => {
    if(window.confirm("Are you sure you want to logout?")){
      console.log("logout");
      logout();
      window.location.reload();
    }
  }
  
  return (
    <div className="relative">
      {user && (
        <div className="absolute top-10 right-10">
          <button onClick={() => confirmLogout()} className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
        </div>
      )}
      {state.currentPage === "register" && <RegisterCom/>}
      {state.currentPage === "login" && <Login/>}
      {state.currentPage === "chat" && <OnlineUser/>}
      {state.currentPage ==="message" && <Message/>}
    </div>
  );
};

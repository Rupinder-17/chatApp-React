<<<<<<< HEAD
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
=======
import { Register } from "../components/Register";
import { Login } from "../components/features/Login.component";
import { useAuth } from "../hooks/api/useAuth";
import { usePage } from '../context/PageContext';
import { PAGES } from '../constants/pages';

>>>>>>> e36adaf7ca5cced6424d673faaaa6ef9c0c0282a
export const Index = () => {

  const {logout, user} = useAuth();
  const { currentPage } = usePage();

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
<<<<<<< HEAD
      {state.currentPage === "register" && <RegisterCom/>}
      {state.currentPage === "login" && <Login/>}
      {state.currentPage === "chat" && <OnlineUser/>}
      {state.currentPage ==="message" && <Message/>}
=======
      {/* check if user is login then show login page */}
      {currentPage === PAGES.REGISTER && <Register/>}

      {/* check if user is not login then show register page */}
      {currentPage === PAGES.LOGIN && <Login/>}
>>>>>>> e36adaf7ca5cced6424d673faaaa6ef9c0c0282a
    </div>
  );
};

import { PAGES } from "../constants/pages";
import { usePage } from "../context/PageContext";
import { Login } from "../components/features/Login.component";
import { useAuth } from "../api/useAuth";
import { RegisterCom } from "../components/features/RegisterCom";
import { OnlineUsers,} from "../components/features/Onlineusers";
import { OneToOneChat } from "../components/features/OneToOneChat";

export const Index = () => {
  const { user, logout } = useAuth();
  const { currentPage } = usePage();

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("logout");
      logout();
      window.location.reload();
    }
  };

  return (
    <div className="relative">
      {user && (
        <div className="absolute top-10 right-10">
          <button
            onClick={() => confirmLogout()}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      )}

      {currentPage === PAGES.REGISTER && <RegisterCom />}

      {currentPage === PAGES.LOGIN && <Login />}
      {currentPage === PAGES.ONLINEUSERS && <OnlineUsers />}
      {currentPage === PAGES.CHAT && <OneToOneChat/>}
    </div>
  );
};

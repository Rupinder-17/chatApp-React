import { PAGES } from "../constants/pages";
import { usePage } from "../context/PageContext";
import { Login } from "../components/features/Login.component";
import { useAuth } from "../api/useAuth";
import { RegisterCom } from "../components/features/RegisterCom";
import { OneToOneChat } from "../components/features/OneToOneChat";
import { Mainn } from "../components/common/Mainn";
import { useEffect } from "react";
// import { RegisterCom } from "../components/features/RegisterCom";

export const Index = () => {
  const { user, logout } = useAuth();
  const { currentPage, setCurrentPage } = usePage();
  console.log("userttt", user);

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("logout");
      logout();
      window.location.reload();
    }
  };

  useEffect(() => {
    if (user) {
      setCurrentPage(PAGES.MAIN);
    }
  }, [user]);
  // const isUserLogin = localStorage.getItem("accessToken");
  // if (isUserLogin) {
  //   if (currentPage === PAGES.MAIN) {
  //     return <Mainn />;
  //   } else if (currentPage === PAGES.CHAT) {
  //     return <OneToOneChat />;
  //   }
  // } else {
  //   if (currentPage === PAGES.LOGIN) {
  //     return <Login />;
  //   } else if (currentPage === PAGES.REGISTER) {
  //     return <RegisterCom />;
  //   }
  // }
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
      {currentPage === PAGES.MAIN && <Mainn />}
      {currentPage === PAGES.CHAT && <OneToOneChat />}
    </div>
  );
};

import { Register } from "../components/Register";
import { Login } from "../components/features/Login.component";
import { useAuth } from "../hooks/api/useAuth";
import { usePage } from '../context/PageContext';
import { PAGES } from '../constants/pages';

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
      {/* check if user is login then show login page */}
      {currentPage === PAGES.REGISTER && <Register/>}

      {/* check if user is not login then show register page */}
      {currentPage === PAGES.LOGIN && <Login/>}
    </div>
  );
};

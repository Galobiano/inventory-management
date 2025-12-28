import { FaPowerOff } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <div className="mt-auto flex pl-5 mb-5">
      <button className="flex items-center gap-2" onClick={logout}>
        <FaPowerOff className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Logout;

import { FaPowerOff } from "react-icons/fa";

const Logout = () => {
  return (
    <div className="mt-auto flex pl-5 mb-5">
      <button className="flex items-center gap-2">
        <FaPowerOff className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Logout;

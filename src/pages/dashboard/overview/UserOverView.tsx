import { FaUser } from "react-icons/fa";

const UserOverView = () => {
  return (
    <div className="flex flex-col items-center ">
      <span>
        <FaUser />
      </span>
      <span>10</span>
      <label>USER</label>
    </div>
  );
};

export default UserOverView;

import ListUsers from "./ListUsers";

const UserManagement = () => {
  return (
    <div className="flex-1 pt-20 px-10">
      <div className="w-auto bg-white p-5 shadow-2xl rounded-2xl">
        <ListUsers />
      </div>
    </div>
  );
};

export default UserManagement;

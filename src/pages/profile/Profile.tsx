import { useGetProfile } from "@/hooks/auth/getProfile";

const Profile = () => {
  const { data } = useGetProfile();

  return (
    <div className="px-10 py-3 flex flex-col items-center ">
      <img
        src={`http://localhost/api-inventory/uploads/users/${data?.profile_image}`}
        alt="Profile"
        className="p-7 rounded-full"
      />
      <h2 className="text-white text-center font-semibold text-lg">
        {data?.username}
      </h2>
    </div>
  );
};

export default Profile;

import profile from "@/assets/profile.jpg";

const Profile = () => {
  return (
    <div className="px-10 py-3 flex flex-col items-center ">
      <img src={profile} alt="Profile" className="p-7 rounded-full" />
      <h2 className="text-white text-center font-semibold text-lg">John Doe</h2>
    </div>
  );
};

export default Profile;

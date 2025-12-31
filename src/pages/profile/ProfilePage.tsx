import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import profile from "@/assets/profile.jpg";
import { useState, useEffect } from "react";

// hook
import { useUpdateProfile } from "@/hooks/auth/updateProfile";
import { useGetProfile } from "@/hooks/auth/getProfile";

const labelProfile = [
  { label: "Name", key: "name", type: "text" },
  { label: "Username", key: "username", type: "text" },
];
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
  });

  const { data } = useGetProfile();
  const updateProfileMutation = useUpdateProfile();

  useEffect(() => {
    // When profile data is received from the server,
    // put it into the input fields
    if (data?.name && data?.username) {
      setProfileData({
        name: data.name,
        username: data.username,
      });
    }
  }, [data]); // run this when data changes

  const handleUpdateProfile = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateProfileMutation.mutateAsync(profileData);
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen  py-10 px-5">
      <Card className="w-full mt-10 space-y-6 py-10">
        <CardHeader>
          <CardTitle className="text-2xl">Profile Information</CardTitle>
          <CardDescription>Manage your profile information</CardDescription>
        </CardHeader>

        <div className="flex flex-col px-5">
          <img src={profile} alt="Profile" className="rounded-full size-30" />
          <div className="flex justify-between">
            <span className="pl-5 pt-2 font-bold">{data?.role}</span>
            <div className="flex gap-2">
              <Button onClick={handleUpdateProfile} disabled={isEditing}>
                Update Profile
              </Button>
              <Button onClick={handleSave} disabled={!isEditing}>
                Save
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="w-full grid grid-cols-2 gap-6">
          {labelProfile.map((item, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-1">
                {item.label}
              </label>
              <Input
                type={item.type}
                value={profileData[item.key as keyof typeof profileData]}
                readOnly={!isEditing}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    [item.key]: e.target.value,
                  })
                }
                className="w-full"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;

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
import { useState, useEffect } from "react";

// hooks
import { useUpdateProfile } from "@/hooks/auth/updateProfile";
import { useGetProfile } from "@/hooks/auth/getProfile";
import { useUpdatePicture } from "@/hooks/auth/updateProfilePic";

const labelProfile = [
  { label: "Name", key: "name", type: "text" },
  { label: "Username", key: "username", type: "text" },
];

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
  });

  const { data } = useGetProfile();
  const updateProfileMutation = useUpdateProfile();
  const updatePictureMutation = useUpdatePicture();

  // populate inputs when API data loads
  useEffect(() => {
    if (data?.name && data?.username) {
      setProfileData({
        name: data.name,
        username: data.username,
      });
    }
  }, [data]);

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

  // image select
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // upload profile picture
  const handleUploadPicture = async () => {
    if (!selectedImage) {
      toast.error("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", selectedImage); // must match backend

    try {
      await updatePictureMutation.mutateAsync(formData);
      toast.success("Profile picture updated");
    } catch (error) {
      toast.error("Failed to update profile picture");
    }
  };

  return (
    <div className="min-h-screen py-10 px-5">
      <Card className="w-full mt-10 space-y-6 py-10">
        <CardHeader>
          <CardTitle className="text-2xl">Profile Information</CardTitle>
          <CardDescription>Manage your profile information</CardDescription>
        </CardHeader>

        {/* Profile Image Section */}
        <div className="flex flex-col px-5">
          <img
            src={`http://localhost/api-inventory/uploads/users/${data?.profile_image}`}
            alt="Profile"
            className="rounded-full size-30"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={!isEditing}
            className="mt-3"
          />

          <div className="flex justify-between mt-3">
            <span className="pl-5 pt-2 font-bold">{data?.role}</span>

            <div className="flex gap-2">
              <Button onClick={handleUpdateProfile} disabled={isEditing}>
                Update Profile
              </Button>

              <Button onClick={handleSave} disabled={!isEditing}>
                Save
              </Button>

              <Button
                onClick={handleUploadPicture}
                disabled={!isEditing || updatePictureMutation.isPending}
              >
                Upload Picture
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Fields */}
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

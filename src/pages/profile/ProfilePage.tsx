import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

const labelProfile = [
  { label: "Name", value: "John Doe", type: "text" },
  { label: "Username", value: "johndoe", type: "text" },
  { label: "Password", value: "********  ", type: "password" },
];
const ProfilePage = () => {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-6xl mx-auto mt-10 space-y-6 py-10">
        <CardHeader>
          <CardTitle className="text-2xl">Profile Information</CardTitle>
          <CardDescription>Manage your profile information</CardDescription>
        </CardHeader>

        <div className="flex flex-col px-5">
          <img src={profile} alt="Profile" className="rounded-full size-30" />
          <div className="flex justify-between">
            <span className="pl-5 pt-2 font-bold">Admin</span>
            <Button>Update Profile</Button>
          </div>
        </div>

        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {labelProfile.map((item, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-1">
                {item.label}
              </label>
              <Input type={item.type} value={item.value} readOnly />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;

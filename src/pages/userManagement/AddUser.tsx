import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { IModel } from "@/types";
import SelectItems from "@/components/SelectItems";

// hook
import { useAddUser } from "@/hooks/users/addUser";

const Roles = [
  {
    value: "admin",
    label: "admin",
  },
  {
    value: "user",
    label: "user",
  },
];

const AddUser = () => {
  const { mutateAsync, isPending } = useAddUser();

  const [form, setForm] = useState<IModel.IADDUSER>({
    name: "",
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      toast.success("User added successfully");

      setForm({
        name: "",
        username: "",
        password: "",
        role: "",
      });
    } catch (error) {
      toast.error("Failed to add user");
    }
  };

  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mr-2 font-bold">Add New User</Button>
        </DialogTrigger>
        <DialogContent className="p-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Name</Label>
              <Input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            {/* USERNAME */}
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Username</Label>
              <Input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={(e) => handleChange("username", e.target.value)}
              />
            </div>
            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="font-bold">User Role</Label>
              <SelectItems
                items={Roles}
                text="roles"
                value={form.role}
                onChange={(value: string) => handleChange("role", value)}
              />
            </div>

            <DialogFooter className="flex justify-start">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Adding..." : "Add User"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;

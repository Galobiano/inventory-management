import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectRolesUser from "./SelectRolesUser";

const AddUser = () => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mr-2 font-bold">Add New User</Button>
        </DialogTrigger>
        <DialogContent className="p-10">
          <form className="space-y-3">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Name</Label>
              <Input type="text" placeholder="Full Name" />
            </div>
            {/* USERNAME */}
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Username</Label>
              <Input type="text" placeholder="Username" />
            </div>
            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="font-bold">User Role</Label>
              <SelectRolesUser />
            </div>
          </form>
          <DialogFooter className="flex justify-start">
            <Button className="font-bold">Add User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;

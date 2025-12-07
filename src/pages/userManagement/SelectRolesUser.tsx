import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectRolesUser = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Roles" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectRolesUser;

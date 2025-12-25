// ListUsers.tsx
import { FaThList } from "react-icons/fa";
import { HiOutlineXCircle } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

import AddUser from "./AddUser";

// hook
import { useGetProducts } from "@/hooks/users/getUsers";
import { useDeleteUser } from "@/hooks/users/deleteUser";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const labels = [
  "Name",
  "Username",
  "User Role",
  "Status",
  "Last Login",
  "Actions",
];

const ListUsers = () => {
  const { data: users } = useGetProducts();
  const { mutateAsync: deleteUser, isPending } = useDeleteUser();

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };
  return (
    <section className="w-full shadow-lg rounded-md overflow-x-auto">
      {/* Header */}
      <header className="flex justify-between bg-[#8FABD4] p-3 rounded-t-md border-b-4 border-primary">
        <div className="flex items-center gap-2 ">
          <FaThList className="text-white" />
          <h1 className="text-lg text-white font-semibold">USER MANAGEMENT</h1>
        </div>
        <AddUser />
      </header>

      {/* Table */}
      <div className="bg-white p-5 rounded-b-md w-full">
        <Table className="w-full table-fixed min-w-full">
          <TableHeader>
            <TableRow>
              {labels.map((label, index) => (
                <TableHead key={index} className="font-bold pl-15 ">
                  {label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {users?.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell className="px-15">{item.name}</TableCell>
                <TableCell className="px-15">{item.username}</TableCell>
                <TableCell className="px-15">{item.role}</TableCell>
                <TableCell className="px-15">{item.status}</TableCell>
                <TableCell className="px-18">
                  {item.last_login || "--"}
                </TableCell>
                <TableCell className="px-12 flex gap-2">
                  {/* <button className="cursor-pointer text-[1.2rem] text-red-500">
                    <HiOutlineXCircle />
                  </button> */}
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    {isPending ? "Deleting..." : "Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ListUsers;

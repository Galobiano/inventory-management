// ListUsers.tsx
import { FaThList } from "react-icons/fa";
import { HiOutlineXCircle } from "react-icons/hi";
import AddUser from "./AddUser";

// hook
import { useGetProducts } from "@/hooks/users/getUsers";

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
                <TableCell className="px-15 flex gap-2">
                  <button className="cursor-pointer text-[1.2rem] text-red-500">
                    <HiOutlineXCircle />
                  </button>
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

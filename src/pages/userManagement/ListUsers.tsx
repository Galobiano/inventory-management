// ListUsers.tsx
import { userLists } from "@/contants/user";
import { FaThList } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { HiOutlineXCircle } from "react-icons/hi";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const labels = [
  "#",
  "Name",
  "Username",
  "User Role",
  "Status",
  "Last Login",
  "Actions",
];

const ListUsers = () => {
  return (
    <section className="w-full shadow-lg rounded-md overflow-x-auto">
      {/* Header */}
      <header className="flex justify-between bg-[#8FABD4] p-3 rounded-t-md border-b-4 border-primary">
        <div className="flex items-center gap-2 ">
          <FaThList className="text-white" />
          <h1 className="text-lg text-white font-semibold">USER MANAGEMENT</h1>
        </div>
        <Button className="mr-2 font-bold">Add New User</Button>
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
            {userLists.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell className="px-15">{item.no}</TableCell>
                <TableCell className="px-15">{item.name}</TableCell>
                <TableCell className="px-15">{item.username}</TableCell>
                <TableCell className="px-15">{item.userrole}</TableCell>
                <TableCell className="px-15">{item.status}</TableCell>
                <TableCell className="">{item.lastlogin}</TableCell>
                <TableCell className="px-15 flex gap-2">
                  <MdEdit className="cursor-pointer text-[1.2rem] text-blue-500" />
                  <HiOutlineXCircle className="cursor-pointer text-[1.2rem] text-red-500" />
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

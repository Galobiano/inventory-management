import { RiPassExpiredFill } from "react-icons/ri";
import { expiringProduct } from "@/contants/expiringproductsData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const label = [
  "Product",
  "Stock",
  "Dated Added",
  "Exprd In:",
  "Expiration Date",
];

const ExpiringProduct = () => {
  return (
    <section className="shadow-lg rounded-md">
      <div className="flex items-center text-white gap-2 bg-[#8FABD4] p-2 rounded-t-md  border-b-4 border-primary">
        <span>
          <RiPassExpiredFill />
        </span>
        <h1 className="text-lg">EXPIRING PRODUCTS</h1>
      </div>

      <div className="bg-white p-5  rounded-b-md">
        <Table>
          <TableHeader>
            <TableRow>
              {label.map((item, index) => (
                <TableHead key={index} className="font-bold">
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {expiringProduct.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="font-medium ">{item.product}</TableCell>
                <TableCell className="font-medium pl-5">
                  {item.stocks}
                </TableCell>
                <TableCell className="font-medium ">{item.dateAdded}</TableCell>
                <TableCell className="font-medium ">{item.exprdIn}</TableCell>
                <TableCell className="font-medium ">
                  {item.expirationDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ExpiringProduct;

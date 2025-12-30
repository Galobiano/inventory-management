import { RiPassExpiredFill } from "react-icons/ri";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// HOOK
import { useGetExpiredProducts } from "@/hooks/product/getExpiredProducts";

const label = [
  "Product",
  "Stock",
  "Dated Added",
  "Exprd In:",
  "Expiration Date",
];

const ExpiringProduct = () => {
  const { data: expiredProducts } = useGetExpiredProducts();
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
            {expiredProducts?.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="font-medium ">{item.name}</TableCell>
                <TableCell className="font-medium pl-5">{item.stock}</TableCell>
                <TableCell className="font-medium ">
                  {item.date_added}
                </TableCell>
                <TableCell className="font-medium ">
                  {item.expired_in}
                </TableCell>
                <TableCell className="font-medium ">
                  {item.expiration_date}
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

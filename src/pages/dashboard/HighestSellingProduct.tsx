import { highestSelling } from "@/contants/highestsellingData";
import { BsBarChartFill } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HighestSellingProduct = () => {
  return (
    <section className=" shadow-lg rounded-md">
      <div className="flex items-center gap-2 bg-[#8FABD4] p-2 rounded-t-md  border-b-4 border-primary">
        <span>
          <BsBarChartFill />
        </span>
        <h1 className="text-lg">HIGHEST SELLING PRODUCTS</h1>
      </div>

      <div className="bg-white p-5  rounded-b-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Title</TableHead>
              <TableHead className="font-bold">Total</TableHead>
              <TableHead className="font-bold">Total Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {highestSelling.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="font-medium ">{item.title}</TableCell>
                <TableCell className="font-medium pl-5">
                  {item.totalSold}
                </TableCell>
                <TableCell className="font-medium pl-12">
                  {item.TotalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default HighestSellingProduct;

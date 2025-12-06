import { latestSale } from "@/contants/latestsellingData";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const label = ["#", "Product Name", "Date", "Total Sale"];

const LatestSales = () => {
  return (
    <section className="  shadow-lg rounded-md">
      <div className="flex items-center gap-2 bg-[#8FABD4] p-2 text-white rounded-t-md  border-b-4 border-primary">
        <span>
          <BiSolidBarChartAlt2 />
        </span>
        <h1 className="text-lg">HIGHEST SELLING PRODUCTS</h1>
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
            {latestSale.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium ">{item.no}</TableCell>
                <TableCell className="font-medium ">
                  {item.productName}
                </TableCell>
                <TableCell className="font-medium">{item.date}</TableCell>
                <TableCell className="font-medium ">
                  ₱{item.totalSale}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default LatestSales;

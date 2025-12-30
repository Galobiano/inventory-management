import { BiSolidBarChartAlt2 } from "react-icons/bi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetLatestSales } from "@/hooks/sales/lastestSales";

const label = ["Product Name", "Date", "Total Sale"];

const LatestSales = () => {
  const { data: latestSalesData } = useGetLatestSales();

  return (
    <section className="  shadow-lg rounded-md">
      <div className="flex items-center gap-2 bg-[#8FABD4] p-2 text-white rounded-t-md  border-b-4 border-primary">
        <span>
          <BiSolidBarChartAlt2 />
        </span>
        <h1 className="text-lg">LATEST SALES</h1>
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
            {latestSalesData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium ">
                  {item.product_name}
                </TableCell>
                <TableCell className="font-medium">{item.created_at}</TableCell>
                <TableCell className="font-medium ">
                  ₱{item.total_price}
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

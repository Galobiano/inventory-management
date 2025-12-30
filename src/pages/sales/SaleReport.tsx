import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { latestSale } from "@/contants/latestsellingData";
import { highestSelling } from "@/contants/highestsellingData";
import {
  FaDollarSign,
  FaShoppingCart,
  FaChartLine,
  FaCalendarAlt,
} from "react-icons/fa";

// hook
import { useGetRecentSales } from "@/hooks/sales/recentSales";
import { useGetTopSellingProducts } from "@/hooks/sales/TopSellingProducts";

const SaleReport = () => {
  const { data: latestSalesData } = useGetRecentSales();
  const { data: topSellingProductsData } = useGetTopSellingProducts();

  // Calculate summary statistics
  const totalSales = latestSale.reduce(
    (sum, sale) => sum + parseFloat(sale.totalSale),
    0
  );
  const totalTransactions = latestSale.length;
  const averageSale = totalSales / totalTransactions;

  const summaryCards = [
    {
      title: "Total Sales",
      value: `₱${totalSales.toLocaleString()}`,
      icon: <FaDollarSign className="text-2xl" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Total Transactions",
      value: totalTransactions.toString(),
      icon: <FaShoppingCart className="text-2xl" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Average Sale",
      value: `₱${averageSale.toFixed(2)}`,
      icon: <FaChartLine className="text-2xl" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "This Month",
      value: "February 2025",
      icon: <FaCalendarAlt className="text-2xl" />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Comprehensive sales analytics and insights
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <Card
            key={index}
            className={`bg-gradient-to-r ${card.color} text-white border-0`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">{card.title}</p>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
                <div className="opacity-80">{card.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Sales */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>Latest sales transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead className="tex-center">Date</TableHead>
                <TableHead className="text-right">Total Sale</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {latestSalesData?.map((sale) => (
                <TableRow key={sale.title}>
                  <TableCell className="font-medium">{sale.title}</TableCell>
                  <TableCell>{sale.created_at}</TableCell>
                  <TableCell className="text-right font-medium">
                    ₱{sale.total_price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Top Selling Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Selling Products</CardTitle>
          <CardDescription>
            Best performing products by sales volume
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead className="text-right">Total Sold</TableHead>
                <TableHead className="text-right">Remaining Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topSellingProductsData?.map((product) => (
                <TableRow key={product.title}>
                  <TableCell className="font-medium">{product.title}</TableCell>
                  <TableCell className="text-right">
                    {product.total_sold}
                  </TableCell>
                  <TableCell className="text-right">
                    {product.remaining_stock}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaleReport;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const summaryOverview = [
  {
    title: "Users",
    value: 10,
    icon: <FaUser />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Products",
    value: 10,
    icon: <MdOutlineProductionQuantityLimits />,
    color: "from-[#D34E4E] to-[#FF6C0C]",
  },
  {
    title: "Inventory",
    value: 10,
    icon: <MdInventory />,
    color: "from-[#7132CA] to-[#F29AAE]",
  },
  {
    title: "Sales",
    value: 10,
    icon: <FaDollarSign />,
    color: " from-[#628141] to-[#BBC863]",
  },
];

const OverView = () => {
  return (
    <main className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryOverview.map((item, index) => (
          <Card
            key={index}
            className={`bg-gradient-to-r ${item.color} text-white`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default OverView;

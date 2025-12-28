import OverView from "./overview/OverView";
import HighestSellingProduct from "./HighestSellingProduct";
import ExpiringProduct from "./ExpiringProduct";
import AddedProducts from "./AddedProducts";
import LatestSales from "./LatestSales";

const Dashboard = () => {
  return (
    <div className="pt-10">
      <OverView />
      <div className="grid lg:grid-cols-3 gap-10 pt-10">
        <div className="bg-white     p-5 shadow-2xl rounded-2xl">
          <HighestSellingProduct />
        </div>

        <div className="bg-white  min-h-sm  p-5 shadow-2xl rounded-2xl">
          <AddedProducts />
        </div>
        <div className="bg-white p-5 shadow-2xl rounded-2xl">
          <LatestSales />
        </div>
        <div className="bg-white w-full min-w-3xl   p-5 shadow-2xl rounded-2xl">
          <ExpiringProduct />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

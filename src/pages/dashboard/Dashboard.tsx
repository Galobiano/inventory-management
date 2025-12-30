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
        <div className="">
          <HighestSellingProduct />
        </div>

        <div className="">
          <AddedProducts />
        </div>
        <div className="">
          <LatestSales />
        </div>
        <div className=" min-w-3xl   ">
          <ExpiringProduct />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

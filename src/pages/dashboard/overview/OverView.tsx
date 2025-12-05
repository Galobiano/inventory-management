import UserOverView from "./UserOverView";
import InventoryOverView from "./InventoryOverView";
import ProductOverView from "./ProductOverView";
import SaleOverView from "./SaleOverView";

const OverView = () => {
  return (
    <main className="bg-white rounded-2xl shadow-lg w-full p-10">
      <div className="max-w-full flex justify-center gap-10 p-2 ">
        <UserOverView />
        <ProductOverView />
        <InventoryOverView />
        <SaleOverView />
      </div>
    </main>
  );
};

export default OverView;

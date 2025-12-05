import UserOverView from "./overview/UserOverView";
import InventoryOverView from "./overview/InventoryOverView";
import ProductOverView from "./overview/ProductOverView";
import SaleOverView from "./overview/SaleOverView";
const OverView = () => {
  return (
    <div className="bg-background w-full h-full">
      <section className="grid grid-cols-4">
        <UserOverView />
        <InventoryOverView />
        <ProductOverView />
        <SaleOverView />
      </section>
    </div>
  );
};

export default OverView;

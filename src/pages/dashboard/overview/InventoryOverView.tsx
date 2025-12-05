import { MdInventory } from "react-icons/md";

const InventoryOverView = () => {
  return (
    <div className="flex flex-col items-center ">
      <span>
        <MdInventory />
      </span>
      <span>10</span>
      <label>INVENTORY</label>
    </div>
  );
};

export default InventoryOverView;

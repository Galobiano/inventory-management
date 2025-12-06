import { MdInventory } from "react-icons/md";

const InventoryOverView = () => {
  return (
    <div className="w-full flex-1 p-5 shadow-lg rounded-2xl bg-linear-to-r from-[#7132CA] to-[#F29AAE] text-muted">
      <div className="flex flex-col items-center gap-3">
        {/* Icon */}
        <span className="text-4xl text-white">
          <MdInventory />
        </span>

        {/* Total */}
        <span className="text-3xl font-bold">10</span>

        {/* Label */}
        <label className="text-sm tracking-wide text-neutral-600 font-bold ">
          INVENTORY
        </label>
      </div>
    </div>
  );
};

export default InventoryOverView;

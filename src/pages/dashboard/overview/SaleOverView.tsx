import { FaDollarSign } from "react-icons/fa";

const SaleOverView = () => {
  return (
    <div className="w-full flex-1 rounded-2xl shadow-lg p-5 bg-gradient-to-r from-[#628141] to-[#BBC863] text-white">
      <div className="flex flex-col items-center gap-3">
        {/* Icon */}
        <span className="text-4xl">
          <FaDollarSign />
        </span>

        {/* Total */}
        <span className="text-3xl font-bold">10</span>

        {/* Label */}
        <label className="text-sm tracking-wide">SALE</label>
      </div>
    </div>
  );
};

export default SaleOverView;

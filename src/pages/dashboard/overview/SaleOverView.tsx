import { FaDollarSign } from "react-icons/fa";

const SaleOverView = () => {
  return (
    <div className=" w-85 rounded-2xl shadow-lg bg-linear-to-r from-[#628141] to-[#BBC863] p-5 text-muted">
      <div className="flex flex-col items-center gap-3">
        <span className="text-4xl text-white ">
          <FaDollarSign />
        </span>
        <span className="text-3xl font-bold">10</span>
        <label className="text-sm tracking-wide text-neutral-600 font-bold">
          SALE
        </label>
      </div>
    </div>
  );
};

export default SaleOverView;

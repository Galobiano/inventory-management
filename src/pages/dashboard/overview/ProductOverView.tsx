import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const ProductOverView = () => {
  return (
    <section className="w-85 rounded-2xl  shadow-lg p-5 bg-linear-to-r from-[#D34E4E] to-[#FF6C0C] text-muted ">
      <div className="flex flex-col items-center gap-3">
        {/* icon */}
        <span className="text-4xl text-white">
          <MdOutlineProductionQuantityLimits />
        </span>

        {/* total */}
        <span className="text-3xl font-bold">10</span>

        {/* label */}
        <label className="text-sm tracking-wide text-neutral-600  font-bold">
          PRODUCT
        </label>
      </div>
    </section>
  );
};

export default ProductOverView;

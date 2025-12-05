import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const ProductOverView = () => {
  return (
    <div className="flex flex-col items-center ">
      <span>
        <MdOutlineProductionQuantityLimits />
      </span>
      <span>10</span>
      <label>PRODUCT</label>
    </div>
  );
};

export default ProductOverView;

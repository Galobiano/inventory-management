import { FaDollarSign } from "react-icons/fa";

const SaleOverView = () => {
  return (
    <div className="flex flex-col items-center ">
      <span>
        <FaDollarSign />
      </span>
      <span>10</span>
      <label>SALE</label>
    </div>
  );
};

export default SaleOverView;

import { FaPlus } from "react-icons/fa";
import { addedProduct } from "@/contants/addedproductData";
const AddedProducts = () => {
  return (
    <section>
      <div className="flex items-center gap-2 bg-[#8FABD4] p-2 rounded-t-md  border-b-4 border-primary">
        <FaPlus />
        <h1 className="text-lg">RECCENTLY ADDED PRODUCTS</h1>
      </div>

      {addedProduct.map((item, index) => (
        <div key={index} className="border p-5">
          <div className="flex justify-between">
            {/* LABEL + IMAGES */}
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                alt=""
                className="size-15 border mt-2 rounded-2xl"
              />
              <label className="text-sm">{item.title}</label>
            </div>

            {/* PRICE + INITIAL */}
            <div className="flex flex-col items-center space-y-7 text-sm ">
              <span className="bg-[#FFE1AF] px-3 font-bold py-1 rounded-full">
                ₱{item.price}
              </span>
              <span className="">{item.initial}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AddedProducts;

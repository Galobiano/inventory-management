import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import ListProduct from "./ListProduct";
import AddCategory from "./AddCategory";

const Product = () => {
  return (
    <section className="bg-white w-full ">
      <div className="flex items-center p-10">
        <SearchProduct />
        <AddCategory />
        <AddProduct />
      </div>
      <div>
        <ListProduct />
      </div>
    </section>
  );
};

export default Product;

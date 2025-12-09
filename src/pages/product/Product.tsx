import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import ListProduct from "./ListProduct";
import AddCategory from "./AddCategory";

const Product = () => {
  return (
    <main className="pt-20">
      <section className="bg-white w-full rounded-2xl ">
        <div className="flex items-center gap-10 p-10">
          <SearchProduct />
          <AddCategory />
          <AddProduct />
        </div>
        <div>
          <ListProduct />
        </div>
      </section>
    </main>
  );
};

export default Product;

import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import ListProduct from "./ListProduct";
import AddCategory from "./AddCategory";

// hook
import { useGetProducts } from "@/hooks/product/getProduct";

const Product = () => {
  const { data: products, isLoading } = useGetProducts();

  if (isLoading) {
    return <div className="p-5">Loading products...</div>;
  }
  return (
    <main className="pt-20">
      <section className="bg-white w-full rounded-2xl ">
        <div className="flex items-center gap-10 p-10">
          <SearchProduct />
          <AddCategory />
          <AddProduct />
        </div>
        <div>
          <ListProduct products={products ?? []} />
        </div>
      </section>
    </main>
  );
};

export default Product;

import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import ListProduct from "./ListProduct";
import AddCategory from "./AddCategory";
import { useGetProducts } from "@/hooks/product/getProduct";

const Product = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 🔹 debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data: products, isLoading } = useGetProducts(debouncedSearch);

  return (
    <main className="pt-20">
      <section className="bg-white w-full rounded-2xl">
        <div className="flex items-center gap-10 p-10">
          <SearchProduct value={search} onChange={setSearch} />
          <AddCategory />
          <AddProduct />
        </div>

        {isLoading ? (
          <div className="p-5">Loading products...</div>
        ) : (
          <ListProduct products={products ?? []} />
        )}
      </section>
    </main>
  );
};

export default Product;

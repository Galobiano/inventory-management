import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import ListProduct from "./ListProduct";
import AddCategory from "./AddCategory";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { useGetProducts } from "@/hooks/product/getProduct";
import { useDeleteProduct } from "@/hooks/product/deleteProduct";

const Product = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { mutateAsync: deleteProduct } = useDeleteProduct();

  // 🔹 debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const { data: products, isLoading } = useGetProducts(debouncedSearch);

  return (
    <main className="pt-20">
      <Card className="bg-white w-full rounded-2xl">
        <CardHeader className="flex items-center gap-10 pt-5">
          <SearchProduct value={search} onChange={setSearch} />
          <AddCategory />
          <AddProduct />
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <div className="p-5">Loading products...</div>
          ) : (
            <ListProduct
              products={products ?? []}
              handleDelete={handleDelete}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default Product;

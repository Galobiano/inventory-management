import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import { toast } from "react-toastify";
import SelectItems from "@/components/SelectItems";

//hook
import { useGetCategories } from "@/hooks/category/getCategries";
import { useAddProduct } from "@/hooks/product/addProduct";
const AddProduct = () => {
  const { data: categories } = useGetCategories();
  const { mutateAsync: addProduct, isPending } = useAddProduct();
  const [title, setTitle] = useState<string>("");
  const [Category, setCategory] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [buyingPrice, setBuyingPrice] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please upload a image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_id", Category);
    formData.append("quantity", quantity.toString());
    formData.append("buying_price", buyingPrice.toString());
    formData.append("selling_price", sellingPrice.toString());
    formData.append("expiration_date", expirationDate);
    if (image) {
      formData.append("image", image);
    }

    try {
      await addProduct(formData);
      toast.success("Product added successfully");
    } catch (error) {
      toast.error("Failed to add product");
    }
  };
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mr-2 font-bold">Add Product</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-5xl p-12">
          <form className="space-y-4">
            {/* PRODUCT TITLE, CATEGORY, UPLOAD, EXPIRATION DATE  */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Product Title:</Label>
                <Input
                  type="text"
                  placeholder="Product Title"
                  className=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="font-bold">Select Category:</Label>
                <SelectItems
                  items={categories}
                  value={Category}
                  onChange={setCategory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="font-bold">Upload Photo:</Label>
                <Input
                  type="file"
                  placeholder="Password"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-bold">Expiration Date:</Label>
                <DatePicker
                  value={expirationDate}
                  onDateChange={setExpirationDate}
                />
              </div>
            </div>
            {/* PRODUCT, BUYING AND SELLING */}
            <div className="grid grid-cols-3 gap-4 pt-5">
              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Product Quantity:</Label>
                <Input
                  type="number"
                  placeholder="Product Title"
                  className=""
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Buying Price:</Label>
                <Input
                  type="number"
                  placeholder="Buying Price"
                  className=""
                  value={buyingPrice}
                  onChange={(e) => setBuyingPrice(Number(e.target.value))}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Selling Price</Label>
                <Input
                  type="number"
                  placeholder="Selling Price"
                  className=""
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </form>
          <DialogFooter className="flex justify-center pt-5">
            <Button
              className="font-bold w-50  bg-destructive"
              onClick={handleAddProduct}
              disabled={isPending}
            >
              {isPending ? "Adding..." : "Add Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;

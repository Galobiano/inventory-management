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
import SelectItems from "@/components/SelectItems";

const categoriesDrugs = [
  { value: "analgesics", label: "Analgesics" },
  { value: "antibiotics", label: "Antibiotics" },
];

const AddProduct = () => {
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
                <Input type="text" placeholder="Product Title" className="" />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="font-bold">Select Category:</Label>
                <SelectItems items={categoriesDrugs} text="categories" />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="font-bold">Upload Photo:</Label>
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-bold">Expiration Date:</Label>
                <DatePicker />
              </div>
            </div>
            {/* PRODUCT, BUYING AND SELLING */}
            <div className="grid grid-cols-3 gap-4 pt-5">
              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Product Quantity:</Label>
                <Input type="number" placeholder="Product Title" className="" />
              </div>

              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Buying Price:</Label>
                <Input type="number" placeholder="Buying Price" className="" />
              </div>

              <div className="flex flex-col gap-2 ">
                <Label className="font-bold">Selling Price</Label>
                <Input type="number" placeholder="Selling Price" className="" />
              </div>
            </div>
          </form>
          <DialogFooter className="flex justify-center pt-5">
            <Button className="font-bold w-50  bg-destructive">
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;

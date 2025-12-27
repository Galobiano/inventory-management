import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

// hook
import { useAddCategory } from "@/hooks/category/addCategory";

const AddCategory = () => {
  const { mutateAsync, isPending } = useAddCategory();

  const [name, setName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutateAsync({ name });

      toast.success("Category added successfully");
      setName(""); // reset input
    } catch (error) {
      toast.error("Failed to add category");
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mr-2 font-bold">Add Category</Button>
      </DialogTrigger>

      <DialogContent className="p-10">
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <Label className="font-bold">Name Category:</Label>
            <Input
              type="text"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <DialogFooter className="flex justify-start">
            <Button type="submit" className="font-bold" disabled={isPending}>
              {isPending ? "Adding..." : "Add Category"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;

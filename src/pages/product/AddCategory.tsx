import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddCategory = () => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mr-2 font-bold">Add Category</Button>
        </DialogTrigger>
        <DialogContent className="p-10">
          <form className="space-y-3">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <Label className="font-bold">Name Category:</Label>
              <Input type="text" placeholder="Full Name" />
            </div>
          </form>
          <DialogFooter className="flex justify-start">
            <Button className="font-bold">Add Category</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCategory;

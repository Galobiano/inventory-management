import Columns from "@/components/Columns";
import DataTable from "@/components/DataTable";
import { IModel } from "@/types";

interface ListProductProps {
  products: IModel.IGETPRODUCT[];
}

const ListProduct: React.FC<ListProductProps> = ({ products = [] }) => {
  return (
    <div className="p-5">
      <DataTable columns={Columns} data={products} />
    </div>
  );
};

export default ListProduct;

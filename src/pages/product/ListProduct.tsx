import Columns from "@/components/Columns";
import DataTable from "@/components/DataTable";
import { IModel } from "@/types";

interface ListProductProps {
  products: IModel.IGETPRODUCT[];
  handleDelete: (id: number) => Promise<void>;
}

const ListProduct: React.FC<ListProductProps> = ({
  products = [],
  handleDelete,
}) => {
  return (
    <div className="p-5">
      <DataTable columns={Columns({ handleDelete })} data={products} />
    </div>
  );
};

export default ListProduct;

import Columns from "@/components/Columns";
import { product } from "@/contants/productData";
import DataTable from "@/components/DataTable";

const ListProduct = () => {
  return (
    <div>
      <DataTable columns={Columns} data={product} />
    </div>
  );
};

export default ListProduct;

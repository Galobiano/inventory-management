"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProductDetails {
  id: number;
  name: string;
  image: string;
  quantity: number;
  total: number;
}

type ColumnsProps = {
  handleDelete: (id: number) => Promise<void>;
};

const Columns = ({
  handleDelete,
}: ColumnsProps): ColumnDef<ProductDetails>[] => [
  {
    accessorKey: "image",
    header: ({ table }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
        <span>Drugs</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />

        <img
          src={
            row.original.image
              ? `http://localhost/api-inventory/uploads/${row.original.image}`
              : "/placeholder.png"
          }
          alt={row.original.name}
          className="h-12 w-12 rounded-md object-cover"
        />

        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Qty",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    id: "actions",
    header: () => <div className="text-right mr-10">Action</div>,
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="flex gap-3 justify-end">
          <Button size="sm" variant="outline" className="mr-0">
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            className="ml-0"
            onClick={() => handleDelete(id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];

export default Columns;

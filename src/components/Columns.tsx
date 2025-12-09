"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductDetails } from "@/contants/productData";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Columns: ColumnDef<ProductDetails>[] = [
  {
    accessorKey: "image",
    header: ({ table }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
        <span>Drugs</span>
        <span></span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
        <img
          src={row.original.image}
          alt={row.original.items}
          className="h-12 w-12 rounded-md object-cover"
        />
        <span className="font-medium">{row.original.items}</span>
      </div>
    ),
  },
  {
    accessorKey: "qty",
    header: "Qty",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "action ",
    header: "Action",
    cell: ({}) => (
      <div className="-pl-10 flex items-center gap-2">
        <Button>
          <Pencil /> Edit
        </Button>
        <span>
          <Trash2 />
        </span>
      </div>
    ),
  },
];
export default Columns;

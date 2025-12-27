import { IModel } from "@/types";

type SelectItemsProps = {
  items?: IModel.IGETCATEGORIES[];
  value: string;
  onChange: (value: string) => void;
};

const SelectItems = ({ items = [], value, onChange }: SelectItemsProps) => {
  return (
    <select
      className="border rounded-lg p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select category
      </option>

      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectItems;

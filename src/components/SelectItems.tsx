type SelectItem = {
  value: string;
  label: string;
};

type SelectItemsProps = {
  items: SelectItem[];
  text: string;
  value: string;
  onChange: (value: string) => void;
};

const SelectItems = ({ items, text, value, onChange }: SelectItemsProps) => {
  return (
    <select
      className="border rounded-lg p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select {text}</option>

      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectItems;

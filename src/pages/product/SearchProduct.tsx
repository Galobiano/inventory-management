type SearchProductProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchProduct = ({ value, onChange }: SearchProductProps) => {
  return (
    <div className="flex border-2 rounded-2xl w-full">
      <input
        type="search"
        placeholder="Search"
        className="p-3 w-full outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchProduct;

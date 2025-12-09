const SearchProduct = () => {
  return (
    <div className="flex border border-2  rounded-2xl w-full">
      <label className="input flex items-center p-2">
        <input type="search" required placeholder="Search" className="" />
      </label>
      <div className="flex w-full justify-end items-center pr-5">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SearchProduct;

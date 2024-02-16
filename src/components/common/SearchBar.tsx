import { useState } from "react";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="container mt-10">
      <form className="max-w-lg" onSubmit={handleFormSubmit}>
        <div className="relative w-80">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-gray-900 bg-gray-50 rounded-lg border-e-gray-200 border-s-2 border border-gray-300 focus:ring-1 ring-blue-200 focus:border-blue-200 outline-none"
            placeholder="Sender, Receiver, Cause, ID..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-500 rounded-e-lg border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

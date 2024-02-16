const SearchBar = () => {
  return (
    <div className="container mt-10">
      <form className="max-w-lg">
        <div className="flex">
          <select
            id="countries"
            className="bg-gray-50 border w-60 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
          >
            <option selected>Search Keyword</option>
            <option value="sender">Sender account</option>
            <option value="receive">Receiver account</option>
            <option value="cause">Cause</option>
            <option value="id">Transaction Id</option>
          </select>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:border-blue-200 outline-blue-200"
              placeholder="Sender, Receiver, Cause, ID..."
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
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

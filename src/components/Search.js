const Search = ({ options, handleOptionChange, menuSelected, data }) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <p className="text-3xl font-semibold text-center mb-6">
          Filter Rocket's Catalogue
        </p>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex">
              <select
                className="w-1/2 p-2 border border-gray-300 rounded-l-lg "
                value={menuSelected}
                onChange={handleOptionChange}
              >
                <option value="">Filter by Status</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

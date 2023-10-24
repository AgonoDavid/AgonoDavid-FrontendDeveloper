function Search() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <p className="text-3xl font-semibold text-center mb-6">
          Filter Rocket's Catalogue
        </p>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex">
              <select className="w-1/2 p-2 border border-gray-300 rounded-l-lg">
                <option value="select">Select</option>
                <option value="status">Status</option>
                <option value="original_launch">Original Launch</option>
                <option value="type">Type</option>
              </select>
              <button className="w-1/2 p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

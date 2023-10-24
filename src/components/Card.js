import { useState } from "react";
import ReactPaginate from "react-paginate";

function Card({ filteredData }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Initially set to the first page
  const itemsPerPage = 10;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getPaginatedItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const currentItems = getPaginatedItems();

  // Function to handle card click and set the selected item
  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  // Function to close the popup
  const closePopup = () => {
    console.log("i love");
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full">
        {currentItems.map((output) => (
          <div
            key={output.id}
            className="relative"
            onClick={() => handleCardClick(output)}
          >
            <DisplayCard data={output} />
            {selectedItem === output && (
              <div className="popup absolute top-0 left-0 mt-4 ml-4">
                <div className="popup-content">
                  <button onClick={closePopup}>Close</button>
                  <p>Capsule Serial: {selectedItem.capsule_serial}</p>
                  <p>Capsule ID: {selectedItem.capsule_id}</p>
                  <p>Original Launch: {selectedItem.original_launch}</p>
                  <p>Status: {selectedItem.status}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={
          <span className=" p-1 text-red-400 hover:text-red-800 font-barslow text-[17px] font-semibold">
            Previous
          </span>
        }
        nextLabel={
          <span className=" p-1 text-red-400 hover:text-red-800 font-barslow text-[17px] font-semibold">
            Next
          </span>
        }
        breakLabel={"..."}
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        className=" flex justify-center gap-4 pb-7"
      />
    </div>
  );
}

// DisplayCard.js (No change in this component)

function DisplayCard({ data }) {
  return (
    <div className="w-full sm:w-1/2  md:w-3/4 lg:w-3/4 p-4 mx-auto mt-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <p>Capsule</p>
          <p className="text-xl font-semibold mb-2">{data.capsule_serial}</p>
          <button className="bg-red-300 p-1 rounded">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

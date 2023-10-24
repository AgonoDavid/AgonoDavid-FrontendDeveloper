import { useContext, useState } from "react";
import SpaceContext from "../API/SpaceContext";

function Card() {
  const { rocketDetails } = useContext(SpaceContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // Function to handle card click and set the selected item
  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  // Function to close the popup
  const closePopup = () => {
    console.log("i love");
    setSelectedItem(null);
  };

  // Calculate the index range for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = rocketDetails.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle the Next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(rocketDetails.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the Previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full">
        {currentCards.map((output) => (
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
      <div className="pagination mx-auto max-w-screen-sm justify-center flex items-center font-barslow gap-5 pb-3 text-white">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-red-400 px-3 rounded-2xl hover:bg-red-500"
        >
          Previous
        </button>
        <span className="border px-4  text-black">{currentPage}</span>
        <button
          className="bg-red-400 px-3 rounded-2xl hover:bg-red-500"
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(rocketDetails.length / cardsPerPage)
          }
        >
          Next
        </button>
      </div>
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

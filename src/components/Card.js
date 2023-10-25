import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import close from "../images/icons8-macos-close-30.png";

// Card component class that extends Component
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null, // Track the selected item
      currentPage: 0, // Track the current page
      itemsPerPage: 10, // Number of items displayed per page
    };
  }

  // Method to handle page change
  handlePageChange = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  // Method to get paginated items
  getPaginatedItems = () => {
    const { currentPage, itemsPerPage } = this.state;
    const { filteredData } = this.props;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  // Method to handle card click and set the selected item
  handleCardClick = (item) => {
    this.setState({ selectedItem: item });
  };

  // Method to close the popup
  closePopup = () => {
    this.setState({ selectedItem: null });
  };

  render() {
    const { selectedItem } = this.state;
    const currentItems = this.getPaginatedItems();

    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full bg-gray-100">
          {currentItems.map((output) => (
            <div className="relative" key={output.id}>
              <DisplayCard
                data={output}
                handleCardClick={() => this.handleCardClick(output)}
                key={output.id}
              />
              {selectedItem === output && (
                <div className="popup absolute top-0 left-0 mt-4 ml-4 font-barslow z-40">
                  <div className="max-w-screen-sm md:max-w-screen-md">
                    <div className="popup-content rounded-lg shadow-lg bg-white p-4">
                      <img
                        className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={this.closePopup}
                        alt="close"
                        src={close}
                      />
                      <p className="text-xl font-semibold mb-2">
                        Capsule Serial: {selectedItem.capsule_serial}
                      </p>
                      <p>Capsule ID: {selectedItem.capsule_id}</p>
                      <p>Original Launch: {selectedItem.original_launch}</p>
                      <p>Status: {selectedItem.status}</p>
                    </div>
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
          pageCount={Math.ceil(
            this.props.filteredData.length / this.state.itemsPerPage
          )}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          className=" flex justify-center gap-4 pb-7 bg-gray-100"
        />
      </div>
    );
  }
}

// DisplayCard class
function DisplayCard({ data, handleCardClick }) {
  return (
    <div className="w-full sm:w-1/2  md:w-3/4 lg:w-3/4 p-4 mx-auto mt-4 font-barslow  transition-transform transform hover:scale-105">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-red-200">
        <div className="p-4">
          <p>Capsule</p>
          <p className="text-xl font-semibold mb-2">{data.capsule_serial}</p>
          <button
            className="bg-red-400 p-1 rounded"
            onClick={handleCardClick} // Call handleCardClick on button click
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

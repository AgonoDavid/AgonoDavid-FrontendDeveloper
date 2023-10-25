import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card"; // Adjust the import path as needed

describe("Card Component", () => {
  // Define a sample dataset for testing
  const sampleData = [
    {
      id: 1,
      capsule_serial: "Serial 1",
      capsule_id: "ID 1",
      original_launch: "Launch 1",
      status: "Status 1",
    },
    {
      id: 2,
      capsule_serial: "Serial 2",
      capsule_id: "ID 2",
      original_launch: "Launch 2",
      status: "Status 2",
    },
    // Add more data items as needed
  ];

  it("handles pagination correctly", () => {
    render(<Card filteredData={sampleData} />);

    // Check if the first item is displayed
    const firstItem = screen.getByText("Serial 1");
    expect(firstItem).toBeInTheDocument();

    // Click the "Next" button to go to the next page
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    // Now, check if the second item is displayed
    const updatedSecondItem = screen.getByText("Serial 2");
    expect(updatedSecondItem).toBeInTheDocument();
  });

  // Add more test cases as needed to cover other functionality and edge cases
});

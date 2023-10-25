import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner"; // Adjust the import path as needed

describe("Banner Component", () => {
  it('renders the "Exploring the Cosmos" text', () => {
    render(<Banner />);
    const exploringText = screen.getByText("Exploring the Cosmos");
    expect(exploringText).toBeInTheDocument();
  });

  it('renders the "One Rocket at a Time" text', () => {
    render(<Banner />);
    const oneRocketText = screen.getByText("One Rocket at a Time.");
    expect(oneRocketText).toBeInTheDocument();
  });

  it('renders the "Explore Catalogue" button', () => {
    render(<Banner />);
    const exploreButton = screen.getByText("Explore Catalogue");
    expect(exploreButton).toBeInTheDocument();
  });

  it("handles button click", () => {
    render(<Banner />);
    const exploreButton = screen.getByText("Explore Catalogue");

    // Simulate a button click
    exploreButton.click();

    // You can add further expectations or actions based on the button click behavior
    // For example, you might navigate to a different page, open a menu, etc.
  });
});

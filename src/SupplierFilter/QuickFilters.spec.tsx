import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";

import { QuickFilters } from "./QuickFilters";

const handleQuickFilterChange = jest.fn();
const selectedValue = "allsupplier";
const QuickFiltersOptions = [
  { label: "All Suppliers", value: "allSuppliers" },
  { label: "Current Market", value: "currentMarket" },
  { label: "Non-Clearing", value: "nonClearing" },
];

const renderQuickFilterComponent = () => {
  render(
    <QuickFilters
      handleQuickFilterChange={handleQuickFilterChange}
      selectedValue={selectedValue}
    >
      {" "}
    </QuickFilters>
  );
};

describe("FilterDrawerComponent", () => {
  it("should render FilterDrawerComponent", () => {
    renderQuickFilterComponent();
    expect(screen.getByTestId("quickFilterTitle")).toBeInTheDocument();
    expect(screen.getByTestId("allSuppliers")).toBeInTheDocument();
    expect(screen.getByTestId("currentMarket")).toBeInTheDocument();
    expect(screen.getByTestId("nonClearing")).toBeInTheDocument();
  });
});

describe("renderQuickFilterComponent and check for radio buttons", () => {
  it("Renders renderQuickFilterComponent and All Suppliers Radio button", () => {
     renderQuickFilterComponent();
    const allSuppliers = screen
      .getByTestId("allSuppliers")
      .querySelector('input[type="radio"]') as HTMLElement;
    fireEvent.click(allSuppliers);
    expect(allSuppliers).not.toBeChecked();
  });

  it("Renders renderQuickFilterComponent and Current Market Radio button",  () => {
     renderQuickFilterComponent();
    const currentMarket = screen
      .getByTestId("currentMarket")
      .querySelector('input[type="radio"]') as HTMLElement;
    expect(currentMarket).not.toBeChecked();
    fireEvent.click(currentMarket);
    expect(handleQuickFilterChange).toHaveBeenCalledWith("currentMarket");
  });

  it("Renders renderQuickFilterComponent and Non Clearing Radio button",  () => {
     renderQuickFilterComponent();
    const nonClearing = screen
      .getByTestId("nonClearing")
      .querySelector('input[type="radio"]') as HTMLElement;
    expect(nonClearing).not.toBeChecked();
    fireEvent.click(nonClearing);
    expect(handleQuickFilterChange).toHaveBeenCalledWith("nonClearing");
  });
});

import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";

import { QuickFilters } from "./QuickFilters";

const handleQuickFilterChange = jest.fn();
const selectedValue = "allsupplier";
const QuickFiltersOptions = [
  { lable: "All Suppliers", value: "allsuppliers" },
  { lable: "Current Market", value: "currentmarket" },
  { lable: "Non-Clearing", value: "nonclearing" },
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
  it("should render FilterDrawerComponent", async () => {
    renderQuickFilterComponent();
    expect(screen.getByTestId("quickFilterTitle")).toBeInTheDocument();
    expect(screen.getByTestId("allsuppliers")).toBeInTheDocument();
    expect(screen.getByTestId("currentmarket")).toBeInTheDocument();
    expect(screen.getByTestId("nonclearing")).toBeInTheDocument();
  });
});

describe("renderQuickFilterComponent and check for radio buttons", () => {
  it("Renders renderQuickFilterComponent and All Suppliers Radio button", async () => {
    await renderQuickFilterComponent();
    const allsuppliers = screen
      .getByTestId("allsuppliers")
      .querySelector('input[type="radio"]') as HTMLElement;
    fireEvent.click(allsuppliers);
    expect(allsuppliers).not.toBeChecked();
  });

  it("Renders renderQuickFilterComponent and Current Market Radio button", async () => {
    await renderQuickFilterComponent();
    const currentmarket = screen
      .getByTestId("currentmarket")
      .querySelector('input[type="radio"]') as HTMLElement;
    expect(currentmarket).not.toBeChecked();
    fireEvent.click(currentmarket);
    expect(handleQuickFilterChange).toHaveBeenCalledWith("currentmarket");
  });

  it("Renders renderQuickFilterComponent and Non Clearing Radio button", async () => {
    await renderQuickFilterComponent();
    const nonclearing = screen
      .getByTestId("nonclearing")
      .querySelector('input[type="radio"]') as HTMLElement;
    expect(nonclearing).not.toBeChecked();
    fireEvent.click(nonclearing);
    expect(handleQuickFilterChange).toHaveBeenCalledWith("nonclearing");
  });
});

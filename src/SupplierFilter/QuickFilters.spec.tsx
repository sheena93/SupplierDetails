import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";

import { QuickFilters } from "./QuickFilters";

const handleQuickFilterChange = jest.fn();
const selectedValue = "allsupplier";


const renderQuickFilterComponent = () => {
  render(
    <QuickFilters
      handleQuickFilterChange={handleQuickFilterChange}
      selectedValue={selectedValue}
    ></QuickFilters>
  );
};

describe("FilterDrawerComponent", () => {
  it("should render FilterDrawerComponent", async () => {
    renderQuickFilterComponent();
    expect(screen.getByTestId("quickFilterTitle")).toBeInTheDocument();
  });
});

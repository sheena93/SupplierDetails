import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";
import { AdvanceFilters } from "./AdvanceFilters";


const AdvanceFiltersComponent = () => {
  render(
    <AdvanceFilters> </AdvanceFilters>
  );
};

describe("AdvanceFiltersComponent", () => {
  it("should render AdvanceFiltersComponent with advance filters", async () => {
    AdvanceFiltersComponent();
    expect(screen.getByText("Advance Filter")).toBeInTheDocument();
    expect(screen.getByText("Supplier Information")).toBeInTheDocument();   
  });

  it('Renders renderMultiFilterComponent and havenoap checkbox', async () => {
    await AdvanceFiltersComponent();
    const supplierInformation = screen.getByText("Supplier Information").querySelector('input[type="checkbox"]') as HTMLElement;
    fireEvent.click(supplierInformation);
    expect(supplierInformation).toBeChecked();
  });
  
});


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
  it("should render AdvanceFiltersComponent with advance filters", () => {
    AdvanceFiltersComponent();
    expect(screen.getByText("Advance Filter")).toBeInTheDocument();
    expect(screen.getByText("Supplier Information")).toBeInTheDocument();   
  });

  it('Check Advance Filter options ',  () => {
    AdvanceFiltersComponent();
   const advanceFilter = screen.getByText("Advance Filter")
   fireEvent.click(advanceFilter);
   const supplierInformation = screen.getByText("Supplier Information")
   expect(supplierInformation).toBeInTheDocument(); 
   fireEvent.click(supplierInformation)
   expect(screen.getByText("Is Registered")).toBeInTheDocument();  
   expect(screen.getByText("Is not Registered")).toBeInTheDocument();
   expect(screen.getByText("Has AP")).toBeInTheDocument();
   expect(screen.getByText("Does not have AP")).toBeInTheDocument();
 });

 it('Check Advance Filter offer options ',  () => {
  AdvanceFiltersComponent();
 const advanceFilter = screen.getByText("Advance Filter")
 fireEvent.click(advanceFilter);
 const offerInformation = screen.getByText("Offer Information")
 expect(offerInformation).toBeInTheDocument(); 
 fireEvent.click(offerInformation)
 expect(screen.getByText("Has placed offer")).toBeInTheDocument();  
 expect(screen.getByText("Has not placed offer")).toBeInTheDocument();
 expect(screen.getByText("Offer is clearing")).toBeInTheDocument();
 expect(screen.getByText("Offer is not clearing")).toBeInTheDocument();
});
});


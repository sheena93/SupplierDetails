import React from "react";
import { screen } from "@testing-library/dom";
import { FilterDrawerComponent } from "./FilterWrapper";
import { render, fireEvent, act } from "@testing-library/react";

const cancelFilter = jest.fn();
const applyFilter = jest.fn();
const resetFilter = jest.fn();

describe("<FilterDrawerComponent />", () => {
  it("should render with required props and show drawer true", async () => {
    render(
      <FilterDrawerComponent
        applyFilter={applyFilter}
        resetFilter={resetFilter}
        cancelFilter={cancelFilter}
        showDrawer={true}
        children
      />
    );
    expect(FilterDrawerComponent).toMatchSnapshot();
    
  });
  it("should render with required props and show drawer false and children <div>", async () => {
    render(
      <FilterDrawerComponent
        applyFilter={applyFilter}
        resetFilter={resetFilter}
        cancelFilter={cancelFilter}
        showDrawer={false}
        children ={<div></div>}
      />
    );
    expect(FilterDrawerComponent).toMatchSnapshot();
  });

  it("should render FilterDrawerComponent multiple children", async () => {
    await act(async () => {
      await render(
        <FilterDrawerComponent
          applyFilter={applyFilter}
          resetFilter={resetFilter}
          cancelFilter={cancelFilter}
          showDrawer={true}
          children = {[<div></div>,<div></div>]}
        />
      );
    });
  });

  it("should handle Apply click", async () => {
    await act(async () => {
      await render(
        <FilterDrawerComponent
          applyFilter={applyFilter}
          resetFilter={resetFilter}
          cancelFilter={cancelFilter}
          showDrawer={true}
          children
        />
      );
      const applyButton = screen.getByText("Apply");
      fireEvent.click(applyButton);
      expect(applyFilter).toBeCalled();
    });
  });

  it("should handle Reset click", async () => {
    await act(async () => {
      await render(
        <FilterDrawerComponent
          applyFilter={applyFilter}
          resetFilter={resetFilter}
          cancelFilter={cancelFilter}
          showDrawer={true}
          children
        />
      );
      const resetButton = screen.getByText("Reset Filters");
      fireEvent.click(resetButton);
      expect(resetFilter).toBeCalled();
    });
  });

  it("should handle Cancel click", async () => {
    await act(async () => {
      await render(
        <FilterDrawerComponent
          applyFilter={applyFilter}
          resetFilter={resetFilter}
          cancelFilter={cancelFilter}
          showDrawer={true}
          children
        />
      );
      const cancelbutton = screen.getByText("Cancel");
      fireEvent.click(cancelbutton);
      expect(cancelFilter).toBeCalled();
    });
  });

});

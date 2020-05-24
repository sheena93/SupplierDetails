import React from "react";
import { screen } from "@testing-library/dom";
import { FilterDrawerComponent, testIds } from "./FilterWrapper";
import { render, fireEvent, act } from "@testing-library/react";


describe("<FilterDrawerComponent />", () => {
    const cancelFilter = jest.fn();
    const applyFilter = jest.fn();
    const resetFilter = jest.fn();

  it("should render with required props", async () => {
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

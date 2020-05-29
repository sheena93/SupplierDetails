import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";
import  {RenderDrawer} from "./RenderDrawer";

const RenderDrawerComponent = () => {
  render(
    <RenderDrawer></RenderDrawer>
  );
};

describe("RenderDrawerComponent", () => {
    it('renders filter button', async () => {
        RenderDrawerComponent();
        expect(screen.getByTestId("filterButton")).toBeInTheDocument();
      });

      it('should open right drawer menu after clicking filter button', () => {
        RenderDrawerComponent();
        const filterButton = screen.getByTestId("filterButton");
        fireEvent.click(filterButton);
        expect(screen.getByText('Add Filters')).toBeVisible()
      });
});

import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";

import { MultiFilterComponent,testIds } from "./MultiFilterWrapper";

const handleChange = jest.fn();
const options = [
  { lable: "Is Registered", value: "isregistered" },
  { lable: "Is not Registered", value: "isnotregistered" },
  { lable: "Has AP", value: "hasap" },
  { lable: "Does not have AP", value: "havenoap" },
];
const title = "test";
const value = {};

const renderMultiFilterComponent = () => {
  render(
    <MultiFilterComponent
      options={options}
      title={title}
      handleChange={handleChange}
      value={value}
    ></MultiFilterComponent>
  );
};

describe("FilterDrawerComponent", () => {
  it("should render FilterDrawerComponent", async () => {
    renderMultiFilterComponent();
    expect(screen.getByTestId(testIds.advanceFilter)).toBeInTheDocument();
  });

  it("should handle clicks", async () => {
    renderMultiFilterComponent();
    fireEvent.click(screen.getByTestId("isregistered"));
    fireEvent.click(screen.getByTestId("isnotregistered"));
    fireEvent.click(screen.getByTestId("hasap"));
    fireEvent.click(screen.getByTestId("havenoap"));
    expect(screen.getByTestId("isregistered")).toBeInTheDocument();
    expect(screen.getByTestId("isnotregistered")).toBeInTheDocument();
    expect(screen.getByTestId("hasap")).toBeInTheDocument();
    expect(screen.getByTestId("havenoap")).toBeInTheDocument();
  });
});

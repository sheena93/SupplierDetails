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
  it("should render FilterDrawerComponent",() => {
    renderMultiFilterComponent();
    expect(screen.getByTestId(testIds.advanceFilter)).toBeInTheDocument();
    expect(screen.getByTestId("isregistered")).toBeInTheDocument();
    expect(screen.getByTestId("isnotregistered")).toBeInTheDocument();
    expect(screen.getByTestId("hasap")).toBeInTheDocument();
    expect(screen.getByTestId("havenoap")).toBeInTheDocument();
  });
});

describe("FilterDrawerComponent checkboxes check and uncheck", () => {
it('Renders renderMultiFilterComponent and isregistered checkbox', () => {
   renderMultiFilterComponent();
  const isregistered = screen
    .getByTestId('isregistered')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(isregistered).not.toBeChecked();
  // change value
  fireEvent.click(isregistered);
  expect(isregistered).toBeChecked();
});

it('Renders renderMultiFilterComponent and isnotregistered checkbox', () => {
   renderMultiFilterComponent();
  const isnotregistered = screen
    .getByTestId('isnotregistered')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(isnotregistered).not.toBeChecked();
  // change value
  fireEvent.click(isnotregistered);
  expect(isnotregistered).toBeChecked();
});

it('Renders renderMultiFilterComponent and hasap checkbox', () => {
   renderMultiFilterComponent();
  const hasap = screen
    .getByTestId('hasap')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(hasap).not.toBeChecked();
  // change value
  fireEvent.click(hasap);
  expect(hasap).toBeChecked();
});

it('Renders renderMultiFilterComponent and havenoap checkbox',  () => {
   renderMultiFilterComponent();
  const havenoap = screen
    .getByTestId('havenoap')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(havenoap).not.toBeChecked();
  // change value
  fireEvent.click(havenoap);
  expect(havenoap).toBeChecked();
});
});

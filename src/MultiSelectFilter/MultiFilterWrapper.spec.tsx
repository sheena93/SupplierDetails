import React from "react";
import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";

import { MultiFilterComponent,testIds } from "./MultiFilterWrapper";

const handleChange = jest.fn();
const options = [
  { label: "Is Registered", value: "isRegistered" },
  { label: "Is not Registered", value: "isNotRegistered" },
  { label: "Has AP", value: "hasAp" },
  { label: "Does not have AP", value: "haveNoAp" },
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
    expect(screen.getByTestId("isRegistered")).toBeInTheDocument();
    expect(screen.getByTestId("isNotRegistered")).toBeInTheDocument();
    expect(screen.getByTestId("hasAp")).toBeInTheDocument();
    expect(screen.getByTestId("haveNoAp")).toBeInTheDocument();
  });
});

describe("FilterDrawerComponent checkboxes check and uncheck", () => {
it('Renders renderMultiFilterComponent and isRegistered checkbox', () => {
   renderMultiFilterComponent();
  const isRegistered = screen
    .getByTestId('isRegistered')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(isRegistered).not.toBeChecked();
  // change value
  fireEvent.click(isRegistered);
  expect(isRegistered).toBeChecked();
});

it('Renders renderMultiFilterComponent and isNotRegistered checkbox', () => {
   renderMultiFilterComponent();
  const isNotRegistered = screen
    .getByTestId('isNotRegistered')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(isNotRegistered).not.toBeChecked();
  // change value
  fireEvent.click(isNotRegistered);
  expect(isNotRegistered).toBeChecked();
});

it('Renders renderMultiFilterComponent and hasAp checkbox', () => {
   renderMultiFilterComponent();
  const hasAp = screen
    .getByTestId('hasAp')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(hasAp).not.toBeChecked();
  // change value
  fireEvent.click(hasAp);
  expect(hasAp).toBeChecked();
});

it('Renders renderMultiFilterComponent and haveNoAp checkbox',  () => {
   renderMultiFilterComponent();
  const haveNoAp = screen
    .getByTestId('haveNoAp')
    .querySelector('input[type="checkbox"]') as HTMLElement;
  expect(haveNoAp).not.toBeChecked();
  // change value
  fireEvent.click(haveNoAp);
  expect(haveNoAp).toBeChecked();
});
});

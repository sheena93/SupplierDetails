import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/dom";
import { SupplierReserveSetting } from "./SupplierReserveSetting";
import { render, fireEvent } from "@testing-library/react";

const mockdata = {
  id: 288747,
  marketId: 958,
  takerId: 1525360,
  reservePercentage: 12,
  reserveAmount: null,
  invoicePriority: "dueDate asc",
  runBeforeAdjustments: false,
  created: "2020-05-10T17:36:30.689976",
  updated: "2020-05-10T18:39:51.062783",
  reserveReason: "hi",
  allowEslapUpdates: false,
};

const supplierReserveSetting = mockdata;
const setSupplierAPRSettings = jest.fn();

describe("<SupplierReserveSetting />", () => {
  render(
    <SupplierReserveSetting
      supplierReserveSetting={supplierReserveSetting}
      setSupplierAPRSettings={setSupplierAPRSettings}
    />
  );
  it("Renders the SupplierReserveSetting componet with datafields and labels", async () => {
    const savebutton = screen.getByText("Save");
    const checkbox = screen.getByTestId("runBeforeAdjustments");

    expect(screen.getByTestId("reserveType")).toHaveTextContent("Reserve Type");
    expect(screen.getByTestId("percentamount")).toHaveTextContent("Do you want to reserve a percentage of the supplier's total invoice amount,or use specific amount?");
    expect(screen.getByTestId("reservereason")).toHaveTextContent("Reserve Reason (optional)");
    expect(screen.getByTestId("invoicepriority")).toHaveTextContent("Invoice Priority");
    expect(screen.getByTestId("invoicedesc")).toHaveTextContent("Invoice priority determine which invoices take precedence in covering reserve");
    expect(screen.getByTestId("lowtohigh")).toHaveTextContent("Days paid early lowest to highest");
    expect(screen.getByTestId("hightolow")).toHaveTextContent("Days paid early highest to lowest");
    expect(screen.getByTestId("invoicecloser")).toHaveTextContent("Invoice with due dates closer to today");
    expect(screen.getByTestId("invoicefurther")).toHaveTextContent("Invoice with due dates farther into the future");
    expect(screen.getByTestId("runbefore")).toHaveTextContent("Run before adjustment");
    expect(screen.getByTestId("reservecalculation")).toHaveTextContent("Should the reserve calculation run before individual invoice adjustments?");
    expect(screen.getByTestId("allowaverride")).toHaveTextContent("Allow overrides?");

    expect(savebutton).toBeDisabled();
    fireEvent.click(savebutton);

    expect(checkbox.checked).toEqual(false);
  });
});

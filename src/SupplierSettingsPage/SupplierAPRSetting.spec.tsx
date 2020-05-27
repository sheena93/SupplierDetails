import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom'
import {SupplierAPRSetting} from './SupplierAPRSetting';
import { render,fireEvent } from '@testing-library/react'

export const supplierInitialMockData = {
  "id": 1915,
  "marketId": 958,
  "takerId": 1525360,
  "created": "2020-05-10T17:18:57.294Z",
  "updated": "2020-05-10T18:57:24.783Z",
  "minReturnAmount": 6,
  "minimumLoanAmount": null,
  "supplierCreditLine": null,
  "maxApr": null,
  "isParticipating": true,
  "reserveSettings": { },
  "dualAuthorizations": {}
}
const supplierAPRSetting = supplierInitialMockData

  describe('<SupplierAPRSetting />', () => { 
    it('Renders MarketActivity with no Suppliers', async () => {
      render ( <SupplierAPRSetting supplierAPRSetting={supplierAPRSetting}/>,);
      expect(screen.getByTestId("minimumaprs")).toHaveTextContent("Minimum APR you are willing to accept from this supplier");
      expect(screen.getByRole("savebutton")).toHaveAttribute("disabled");
      fireEvent.click(screen.getByText("Save"));
    });
});


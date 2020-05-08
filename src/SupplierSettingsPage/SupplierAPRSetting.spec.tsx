import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom'
import {SupplierAPRSetting} from './SupplierAPRSetting';
import { render,fireEvent } from '@testing-library/react'


  describe('<SupplierAPRSetting />', () => { 
    it('Renders MarketActivity with no Suppliers', async () => {
      render ( <SupplierAPRSetting />,);
      expect(screen.getByText('Minimum APR you are willing to accept from this supplier')).toBeInTheDocument()
      expect(screen.getByText('Save')).toBeInTheDocument()
      expect(screen.getByTestId('minimumaprs')).toBeVisible();
      expect(screen.getByTestId('saveButton')).toBeVisible();
    });
});


import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom'
import {SupplierReserveSetting} from './SupplierReserveSetting';
import { render } from '@testing-library/react'


  describe('<SupplierReserveSetting />', () => { 
    it('Renders MarketActivity with no Suppliers', async () => {
      render ( <SupplierReserveSetting />,);
      expect(screen.getByTestId('reserveType')).toBeVisible();
      expect(screen.getByTestId('saveButton')).toHaveTextContent('Save');
    });
});


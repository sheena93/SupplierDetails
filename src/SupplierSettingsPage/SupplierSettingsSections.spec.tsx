import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/dom'
import SupplierSettingsSections from './SupplierSettingsSections';
import { render } from '@testing-library/react'


  describe('<SupplierReserveSetting />', () => { 
    it('Renders SupplierSettingsSections with minimum APR', async () => {
      render ( <SupplierSettingsSections />,);
      expect(screen.getByTestId('minimumApr')).toHaveTextContent('Minimum APR');
      expect(screen.getByTestId('reserve')).toHaveTextContent('Reserve');
    });
});


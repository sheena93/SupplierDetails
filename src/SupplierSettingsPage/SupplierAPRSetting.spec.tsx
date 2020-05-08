import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {SupplierAPRSetting} from './SupplierAPRSetting';
import { render } from '@testing-library/react'


  describe('<SupplierAPRSetting />', () => {
    const participationSelectorTestId = `[data-testid="participation"]`;
  
    it('Renders MarketActivity with no Suppliers', async () => {
      const { container,getByText } = render ( <SupplierAPRSetting />,);
      expect(getByText('Minimum APR you are willing to accept from this supplier')).toBeInTheDocument()
      expect(container.firstChild).toMatchInlineSnapshot(`
      <Grid > </Grid>
    `)
    });
});


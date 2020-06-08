import React from 'react';
import { screen, wait,render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewUserModal, testIds } from './ViewUserModal';


const userDetailMock = [{
    "email": "eric.sandy@asianpaints.com",
    "name": "Eric Sandy",
    "title": "Finance Head",
    "phone": 985673,
    "status": "Active"
  }]

const userNameMock = "FEDERAL CROP"

const onModalClose = jest.fn();

const renderVendorUserModal = () => {
    render(<ViewUserModal userName={userNameMock} userDetails={userDetailMock} {...{ onModalClose }} />);
  };

describe('MarketNavigation', () => {
    it('Modal should not be visible when vendor name is not defined', () => {
      <ViewUserModal {...{ onModalClose }} />;
  
      const modalBody = screen.queryByTestId(testIds.modalBody);
  
      expect(modalBody).not.toBeInTheDocument();
    });

    it('onModalClose callback should be fired when close button is clicked',async () => {
        renderVendorUserModal();
    
        const modalBody =  screen.getByTestId(testIds.modalBody);
    
        expect(modalBody).toBeInTheDocument();
    
        const closeButton = screen.getByTestId(testIds.modalCloseButton);
    
        userEvent.click(closeButton);
    
        expect(onModalClose).toBeCalledTimes(1);
      });

      it('It should display the vendor detail table when modal is opened', () => {
        renderVendorUserModal();
        
            const modalBody = screen.getByTestId(testIds.modalBody);
        
            expect(modalBody).toBeInTheDocument();
        
            const vendorTable = screen.getByTestId(testIds.table);
        
            expect(vendorTable).toBeInTheDocument;
          });
});

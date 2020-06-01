import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Box,
  Grid,
  TextField,
  makeStyles,
  Liquidity,
  TypeBase,
  TypeLabel,
  TypeHelper,
} from '@c2fo/components';

export const ViewUserModal: React.FC = ({  }) => {
    return (
        <Modal
          aria-labelledby="edit-offer-modal-title"
          open={true}
        //   onClose={handleClose}
          modalTitle="View Contacts"
          closeButtonTestId="edit-offer-modal:close"
          actionsContent={
            <Button
              size="large"
              color="secondary"
            //   onClick={submitForm}
              data-testid="edit-offer-submit"
            >
             Close
            </Button>
          }
        >
            <div>
                Hi
            </div>
            </Modal>
    )
}

import React from 'react';
import { screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewUserModal, testIds } from './ViewUserModal';



const onModalClose = jest.fn();

import React from 'react';
import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';

import {FilterDrawer, testIds} from "./FilterDrawer";

const cancelFilter = jest.fn();
const applyFilter = jest.fn();
const resetFilter = jest.fn();
const childText = 'Test';

const renderFilterDrawer = (showDrawer: boolean = true) => {
  render(
      <FilterDrawer
          applyFilter={applyFilter}
          resetFilter={resetFilter}
          cancelFilter={cancelFilter}
          showDrawer={showDrawer}
      >
        <div>{childText}</div>
      </FilterDrawer>,
  );
};

describe('FilterDrawerComponent', () => {
  it('should render FilterDrawerComponent', async () => {
    renderFilterDrawer();
    expect(screen.getByTestId(testIds.drawer)).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('should handle Apply click', async () => {
    renderFilterDrawer();
    const applyButton = screen.getByTestId(testIds.applyButton);
    fireEvent.click(applyButton);
    expect(applyFilter).toBeCalled();
  });

  it('should handle Cancel click', async () => {
    renderFilterDrawer();
    const cancelButton = screen.getByTestId(testIds.cancelButton);
    fireEvent.click(cancelButton);
    expect(cancelFilter).toBeCalled();
  });

  it('should handle Reset click', async () => {
    renderFilterDrawer();
    const resetButton = screen.getByTestId(testIds.resetButton);
    fireEvent.click(resetButton);
    expect(resetFilter).toBeCalled();
  });
});

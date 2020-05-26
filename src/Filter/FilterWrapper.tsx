import React, { ReactNode } from 'react';
import { Box, Button, Divider, Drawer, Grid, TypeBase } from '@c2fo/components';

import { useStyles } from './FilterWrapper.style';
// import { T } from '../../../i18n';

const TESTID_ROOT = 'filterDrawer';
export const testIds = {
  drawer: `${TESTID_ROOT}:drawerComponent`,
  applyButton: `${TESTID_ROOT}:applyButton`,
  cancelButton: `${TESTID_ROOT}:cancelButton`,
  resetButton: `${TESTID_ROOT}:resetButton`,
} as const;

type FilterDrawerProps = {
  showDrawer: boolean;
  applyFilter: () => void;
  resetFilter: () => void;
  cancelFilter?: () => void;
};

export const FilterDrawer: React.FC<FilterDrawerProps & ReactNode> = ({
  children,
  showDrawer,
  applyFilter,
  resetFilter,
  cancelFilter,
}) => {
  const classes = useStyles();

  return (
    <Drawer
      data-testid={testIds.drawer}
      anchor="right"
      open={showDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={
        cancelFilter
          ? {
              onBackdropClick: () => {
                cancelFilter();
              },
            }
          : {}
      }
    >
      <div className={classes.drawer}>
        <Box className={classes.addFiltersTitle}>
          <TypeBase isEmphasis>
            {/* todo add translation */}
            {/* <T k="core.addFilters">ADD FILTERS</T> */}
            ADD FILTERS
          </TypeBase>
        </Box>
        <Divider />
        <div className={classes.Drawerchildren}> {children} 
        <Button
          className={classes.resetFilters}
          data-testid={testIds.resetButton}
          variant="text"
          color="secondary"
          onClick={resetFilter}
        >
          {/* todo add translation */}
          {/* <T k="core.resetFilter">Reset Filters</T> */}
          Reset Filters
        </Button>
        </div>
        <Grid container className={classes.filterButtons} spacing={1}>
          <Grid item sm="auto" xs={12}>
            <Button
              data-testid={testIds.cancelButton}
              className={classes.cancelButton}
              size="large"
              variant="text"
              color="secondary"
              onClick={cancelFilter}
            >
              {/* <T k="core.cancel">Cancel</T> */}
              Cancel
            </Button>
          </Grid>
          <Grid item sm="auto" xs={12}>
            <Button
              data-testid={testIds.applyButton}
              className={classes.applyButton}
              size="large"
              variant="contained"
              onClick={applyFilter}
            >
              {/* <T k="core.apply">Apply</T> */}
              Apply
            </Button>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};
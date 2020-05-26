import React, { ReactNode } from 'react';
import { Box, Button, Divider, Drawer, Grid, TypeBase } from '@c2fo/components';

import {useStyles} from "./FIlterWrapper.style";

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

export const FilterDrawerComponent: React.FC<FilterDrawerProps & ReactNode> = ({
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
              ADD FILTERS
            </TypeBase>
          </Box>
          <Divider />
          <div> {children} </div>
          <Button
              className={classes.resetFilters}
              data-testid={testIds.resetButton}
              variant="text"
              color="secondary"
              onClick={resetFilter}
          >
            {/* todo add translation */}
            Reset Filters
          </Button>
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
                Apply
              </Button>
            </Grid>
          </Grid>
        </div>
      </Drawer>
  );
};

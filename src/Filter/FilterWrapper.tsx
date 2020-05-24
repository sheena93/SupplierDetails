import React, { ReactNode } from 'react';
import {
  Drawer,
  Box,
  Grid,
  Button
} from '@c2fo/components';

import {useStyles} from './FIlterWrapper.style';


const TESTID_ROOT = 'custom-filters';
export const testIds = {
  root: TESTID_ROOT,
  drawer: `${TESTID_ROOT}:drawercomponent`,
  applyButton: `${TESTID_ROOT}:applyButton`,
  cancelButton: `${TESTID_ROOT}:cancelButton`,
  resetButton: `${TESTID_ROOT}:resetButton`,

} as const;

interface TestProps {
  children : ReactNode,
  applyFilter: () => void,
  resetFilter: () =>void,
  cancelFilter?: () =>void,
  showDrawer:boolean
}

export const FilterDrawerComponent: React.FC<TestProps>= ({children,applyFilter,resetFilter,cancelFilter,showDrawer}) => {
  const classes = useStyles();
  return (
        <Drawer
          data-testid={testIds.drawer}
          anchor="right"
          // open={showDrawer}
          open = {true}
          ModalProps={{
            onBackdropClick: () => {
              cancelFilter && cancelFilter();
            },
          }}
        >
          <div className={classes.drawer}>
            <Box className={classes.addFiltersTitle}>
              {/* <T k="addFilters"> ADD FILTERS </T> */}
              ADD FILTERS
            </Box>
            <div>
              {children}
            </div>
            <Box className={classes.resetFilters}>
              <Button
                  data-testid={testIds.resetButton}
                  size="large"
                  variant="text"
                  color="secondary"
                  onClick={resetFilter}
                >
                  {/* <T k="core.cancel">Cancel</T> */}
                  Reset Filters
                </Button>
            </Box>
            <Grid className={classes.filterButtons} container>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
      )}
 
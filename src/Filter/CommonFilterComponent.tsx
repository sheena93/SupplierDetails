import React, { Children, ReactNode } from 'react';
import {
  Drawer,
  Box,
  Grid,
  Button
} from '@c2fo/components';

import {useStyles} from './CommonFIlterComponent.style';


const TESTID_ROOT = 'custom-filters';
export const testIds = {
  root: TESTID_ROOT,
  filterButton: `${TESTID_ROOT}:filterButton`,
  applyButton: `${TESTID_ROOT}:applyButton`,
  rightDrawer: `${TESTID_ROOT}:rightDrawer`,
  cancelButton: `${TESTID_ROOT}:cancelButton`,
  resetButton: `${TESTID_ROOT}:resetButton`,
} as const;

type Props = {children : ReactNode ,applyFilter: () => void , resetFilter: () =>void , cancelFilter:() =>void,showDrawer:boolean}
export const FilterDrawerComponent: React.FC<Props>= ({children,applyFilter,resetFilter,cancelFilter,showDrawer}) => {
  const classes = useStyles();
  return (
        <Drawer
          data-testid="hi"
          anchor="right"
          open={showDrawer}
          ModalProps={{
            onBackdropClick: () => {
              cancelFilter();
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
 
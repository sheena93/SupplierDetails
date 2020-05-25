import React, { useState } from "react";
import { FilterDrawerComponent } from "../Filter/FilterWrapper";
import { QuickFilters, useQuickFilter } from "./QuickFilters";
import { Button } from "@c2fo/components";
import { useStyles } from "../Filter/FilterWrapper.style";
import { AdvanceFilters } from "./AdvanceFilters";
import {
  withAdvanceFilterProvider,
  useAdvanceFilterHook,
  AdvanceFiltertype,
} from "./AdvanceFilterHook";

const RenderDrawer: React.FC = () => {
  const classes = useStyles();
  const [showDrawer, setshowDrawer] = useState(false);
  const [selectedFilter, setSelectedFilter] = useQuickFilter("allsuppliers");

  const filterHook: AdvanceFiltertype | null = useAdvanceFilterHook();
  const { resetState, applyFilterState, restorePreviousState } =
    filterHook || {};

  function resetFilter() {
    setSelectedFilter("");
    resetState && resetState();
    // filterHook?.resetState();
    setshowDrawer(false);
  }
  function applyFilter() {
    console.log("Saved filter value", selectedFilter);
    applyFilterState && applyFilterState();
    setshowDrawer(false);
  }
  function cancelFilter() {
    restorePreviousState && restorePreviousState();
    setshowDrawer(false);
  }
  function handleQuickFilterChange(value: string) {
    setSelectedFilter(value);
  }
  function openDrawer() {
    setshowDrawer(true);
  }

  return (
    <div>
      <Button
        className={classes.applyButton}
        size="large"
        variant="contained"
        onClick={openDrawer}
      >
        Filter
      </Button>
      <FilterDrawerComponent
        {...{ applyFilter, resetFilter, cancelFilter, showDrawer }}
      >
        <QuickFilters
          handleQuickFilterChange={handleQuickFilterChange}
        ></QuickFilters>
        <AdvanceFilters />
      </FilterDrawerComponent>
    </div>
  );
};

export default withAdvanceFilterProvider(RenderDrawer);

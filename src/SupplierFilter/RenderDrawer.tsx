import React, { useState } from "react";
import { FilterDrawer } from "../Filter/FilterWrapper";
import { QuickFilters} from "./QuickFilters";
import {useQuickFilter} from "./QuickFilterHook"
import { Button } from "@c2fo/components";
import { useStyles } from "../SupplierFilter/SupplierFilter.style";
import { AdvanceFilters } from "./AdvanceFilters";
import {
  withAdvanceFilterProvider,
  useAdvanceFilterHook,
  AdvanceFiltertype,
} from "./AdvanceFilterHook";
import {previousStateType} from "./AdvanceFilterHook"

export const RenderDrawer: React.FC = () => {
  const classes = useStyles();
  const [showDrawer, setshowDrawer] = useState(false);
  const [quickFilter, setQuickFilter] = useQuickFilter("allsuppliers");

  const filterHook: AdvanceFiltertype | null = useAdvanceFilterHook();
  const { resetState, applyFilterState, restorePreviousState } =
    filterHook || {};

  function resetFilter() {
    setQuickFilter("");
    resetState && resetState();
    setshowDrawer(false);
  }
  function applyFilter() {
    callApplyFilterAPI(quickFilter,applyFilterState ? applyFilterState() : undefined);
    setshowDrawer(false);
  }
  function cancelFilter() {
    restorePreviousState && restorePreviousState();
    setshowDrawer(false);
  }
  function handleQuickFilterChange(value: string) {
    setQuickFilter(value);
  }
  function openDrawer() {
    setshowDrawer(true);
  }

  return (
    <div>
       {/* remove the button and call openDrawer on the actual button in application from where the filter drawer need to get open */}
      <Button
        className={classes.applyButton}
        size="large"
        variant="contained"
        onClick={openDrawer}
        data-testid="filterButton"
      >
        Filter
      </Button>
      <FilterDrawer
        {...{ applyFilter, resetFilter, cancelFilter, showDrawer }}
      >
        <QuickFilters
          handleQuickFilterChange={handleQuickFilterChange}
          selectedValue ={quickFilter}

        ></QuickFilters>
        <AdvanceFilters />
      </FilterDrawer>
    </div>
  );
};

export default withAdvanceFilterProvider(RenderDrawer);

function callApplyFilterAPI(QuickFilterState:string,AdvanceFIlterState?:previousStateType | null){
  const FilterObject= AdvanceFIlterState ? {...AdvanceFIlterState,QuickFilter:QuickFilterState}: {QuickFilter:QuickFilterState}
  console.log("FilterObject",FilterObject)
  //Fetch URL and pass this object FilterObject
  }

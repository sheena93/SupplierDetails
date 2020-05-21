import React, { Fragment, useState, useEffect } from "react";
import { FilterDrawerComponent } from "../Filter/CommonFilterComponent";
import { QuickFilters, useQuickFilter } from "./QuickFilters";
import { MultiFilterComponent } from "../MultiSelectFilter/index";
import { Button } from "@c2fo/components";
import { useStyles } from "../Filter/CommonFIlterComponent.style";
import { AdvanceFilters } from "./AdvanceFilters";

const RenderDrawer: React.FC = () => {
  const classes = useStyles();
  const [showDrawer, setshowDrawer] = useState(false);
  const [selectedFilter, setSelectedFilter] = useQuickFilter("allsuppliers");

  function resetFilter() {
    setSelectedFilter("");
  }
  function applyFilter() {
    console.log("Saved filter value", selectedFilter);
    setshowDrawer(false);
  }
  function cancelFilter() {
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

export default RenderDrawer;

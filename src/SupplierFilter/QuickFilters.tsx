import React, { Fragment, useState, useCallback } from "react";
import { Box, RadioGroup, Radio, FormControlLabel } from "@c2fo/components";

import { useStyles } from "../Filter/CommonFIlterComponent.style";
import { QuickFiltersOptions } from "./SupplierFilters.schema";

type Props = { handleQuickFilterChange: Function };
export const QuickFilters: React.FC<Props> = ({ handleQuickFilterChange }) => {
  const classes = useStyles();

  const quickFilterLinks = QuickFiltersOptions.map((quickFilterLinks) => (
    <FormControlLabel
      key={quickFilterLinks.value}
      label={quickFilterLinks.lable}
      value={quickFilterLinks.value}
      onChange={() => handleQuickFilterChange(quickFilterLinks.value)}
      control={<Radio />}
    />
  ));

  return (
    <Fragment>
      <Box className={classes.QuickFilterTitle}>
        {/* <T k="addFilters"> ADD FILTERS </T> */}
        Quick Filters
      </Box>
      <RadioGroup className={classes.radioGroupContainer}>
        {quickFilterLinks}
      </RadioGroup>
    </Fragment>
  );
};

type Hook = (defaultvalue: string) => [string, (value: string) => void];
export const useQuickFilter: Hook = (defaultvalue: string) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(defaultvalue);
  console.log("defaultvalue", defaultvalue);
  const handleQuickFilterChange = useCallback(
    function (value: string) {
      setSelectedFilter(value);
    },
    [selectedFilter]
  );
  return [selectedFilter, handleQuickFilterChange];
};

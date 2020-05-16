import React, { Fragment, useState, useCallback } from "react";
import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
} from "@c2fo/components";

import { useStyles } from "../Filter/CommonFIlterComponent.style";
import {QuickFiltersOptions} from './SupplierFilters.schema';

type Props = {handleQuickFilterChange: Function}
export const SupplierFilters: React.FC<Props> = ({handleQuickFilterChange}) => {
  const classes = useStyles();

  const quickFilterLinks = QuickFiltersOptions.map(quickFilterLinks => (
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
export const useQuickFilter = () =>{
  const [selectedFilter,setSelectedFilter] = useState<string>("");
  const handleQuickFilterChange = useCallback(function(value:string){
    setSelectedFilter(value);
  },[selectedFilter])
  return [selectedFilter,handleQuickFilterChange];
}
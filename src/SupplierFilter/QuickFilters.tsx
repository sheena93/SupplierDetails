import React, { Fragment, useState, useCallback } from "react";
import { Box, RadioGroup, Radio, FormControlLabel } from "@c2fo/components";

import { useStyles } from "../SupplierFilter/SupplierFilter.style";
import { QuickFiltersOptions } from "./SupplierFilters.schema";

type Props = { handleQuickFilterChange: Function ,selectedValue: string};
export const QuickFilters: React.FC<Props> = ({ handleQuickFilterChange,selectedValue }) => {
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
      <Box className={classes.QuickFilterTitle} data-testid="quickFilterTitle">
         {/* todo add translation */}
        Quick Filters
      </Box>
      <RadioGroup className={classes.radioGroupContainer} value={selectedValue}
            name="depositType">
        {quickFilterLinks}
      </RadioGroup>
    </Fragment>
  );
};


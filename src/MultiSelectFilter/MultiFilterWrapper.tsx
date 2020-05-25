import React, { useCallback, useState } from "react";
import {
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  AngleDownIcon,
  TypeBase,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@c2fo/components";
import { QuickFiltersInterface } from "../SupplierFilter/SupplierFilters.schema";
import { useStyles } from "../Filter/FilterWrapper.style";


export type handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void
export type resetFilterType = (restoreState?: Statetype) => void
export type Hook = (options: Array<QuickFiltersInterface>) => [Statetype, handleChangeType, resetFilterType];

type props = {
  options: Array<QuickFiltersInterface>;
  title: string;
  handleChange: handleChangeType | undefined;
  value: Statetype | undefined;
};
export const MultiFilterComponent: React.FC<props> = ({
  options = [],
  title,
  handleChange,
  value = {}
}) => {
  const classes = useStyles();

  const optionList = options.map((option) => (
    <FormControlLabel
      control={
        <Checkbox checked={value[option.value]} onChange={handleChange} name={option.value} />
      }
      label={option.lable}
    />
  ));

  return (
    <div className={classes.drawer}>
      <ExpansionPanel square classes={{ root: classes.expansionPanelRoot }}>
        <Box className={classes.AdvanceFilterTitle}>
          <ExpansionPanelSummary
            expandIcon={<AngleDownIcon />}
            className={classes.advancedOptions}
            classes={{
              root: classes.expansionPanelSummaryRoot,
              content: classes.expansionPanelSummaryContent,
            }}
          >
            <TypeBase>{title}</TypeBase>
          </ExpansionPanelSummary>
        </Box>

        <ExpansionPanelDetails
          classes={{ root: classes.expansionPanelDetailsRoot }}
        >
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>{optionList}</FormGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};


export interface Statetype {
  [key: string]: boolean
}

function getOptionsState(options: Array<QuickFiltersInterface>): Statetype {
  const list: Statetype = {};
  options.map((option) => {
    list[option.value] = false
  })
  return list
}
export const useMultiSelectFilter: Hook = (options) => {
  const [selectedFilter, setSelectedFilter] = useState<Statetype>(
    getOptionsState(options)
  );
  
  const handleMultiselectFilterChange = useCallback(
    function (event: React.ChangeEvent<HTMLInputElement>) {
      setSelectedFilter({ ...selectedFilter, [event.target.name]: event.target.checked });
    },
    [selectedFilter]
  );

  const resetFilter: resetFilterType = (restoreState) => {
    if (restoreState) {
      setSelectedFilter(restoreState);
    } else {
      setSelectedFilter(getOptionsState(options))
    }
  }
  return [selectedFilter, handleMultiselectFilterChange, resetFilter];
};
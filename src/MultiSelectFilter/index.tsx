import React, { useCallback,useState } from "react";
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
import { useStyles } from ".././Filter/CommonFIlterComponent.style";
import { Grid } from "@material-ui/core";

type props = {
  options: Array<QuickFiltersInterface>;
  title: string;
  handleChange: () => void;
};
export const MultiFilterComponent: React.FC<props> = ({
  options = [],
  title,
  handleChange,
}) => {
  const classes = useStyles();

  const optionList = options.map((option) => (
    <FormControlLabel
      control={
        <Checkbox checked={true} onChange={handleChange} name={option.value} />
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


export interface Statetype{
    [key:string] : boolean
}

type Hook = (options: Array<QuickFiltersInterface>) => [Statetype, (event: React.ChangeEvent<HTMLInputElement>) => void];
function getOptionsState(options:Array<QuickFiltersInterface>): Statetype{
  const list:Statetype ={};
   options.map ((option) =>{
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
  return [selectedFilter, handleMultiselectFilterChange];
};


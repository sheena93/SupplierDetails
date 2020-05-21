import React, { ReactNode } from "react";
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
        <ExpansionPanelSummary
          expandIcon={<AngleDownIcon />}
          className={classes.advancedOptions}
          classes={{
            root: classes.expansionPanelSummaryRoot,
            content: classes.expansionPanelSummaryContent,
          }}
        ><Grid item xs={12} sm={12}> 
               <Box className={classes.QuickFilterTitle}>
          <TypeBase>{title}</TypeBase>
          </Box>
          </Grid>
        </ExpansionPanelSummary>
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

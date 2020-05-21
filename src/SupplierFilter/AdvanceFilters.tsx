import React, { Fragment, useState, useCallback } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  AngleDownIcon,
  TypeBase,
  Grid,
} from "@c2fo/components";

import { useStyles } from "../Filter/CommonFIlterComponent.style";
import { MultiFilterComponent,useMultiSelectFilter } from "../MultiSelectFilter/index";
import {
  SupplierInformation,
  ElligibleAp,
  OfferInformation,
  ClearingApr,
  ClearingDpe,
  NonclearingApr,
  NonclearingDpe
} from "../SupplierFilter/SupplierFilters.schema";



type Props = { handleMultiselectFilterChange: Function };
export const AdvanceFilters: React.FC<Props> = (handleMultiselectFilterChange) => {
  const classes = useStyles();
  function openDrawer() {}
  return (
    <Fragment>
        <ExpansionPanel square classes={{ root: classes.expansionPanelRoot }}>
        <Grid item xs={12} sm={6}>
          <ExpansionPanelSummary
            expandIcon={<AngleDownIcon />}
            className={classes.advancedOptions}
            classes={{
              root: classes.expansionPanelSummaryRoot,
              content: classes.expansionPanelSummaryContent,
            }}
          >
            <TypeBase classes={{ root: classes.advanceFiltertitle }}>
              {" "}
              Advance Filter
            </TypeBase>
          </ExpansionPanelSummary>
          </Grid>
          <ExpansionPanelDetails
            classes={{ root: classes.expansionPanelDetailsRoot }}
          >
            <MultiFilterComponent
              title="Supplier Infomation"
              options={SupplierInformation}
              handleChange={openDrawer}
            ></MultiFilterComponent>

            <MultiFilterComponent
              title="Offer Infomation"
              options={OfferInformation}
              handleChange={openDrawer}
            ></MultiFilterComponent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      
    </Fragment>
  );
};

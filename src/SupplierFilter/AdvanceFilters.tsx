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
import { MultiFilterComponent } from "../MultiSelectFilter/index";
import {
  SupplierInformation,
  ElligibleAp,
  OfferInformation,
  ClearingApr,
} from "../SupplierFilter/SupplierFilters.schema";

export const AdvanceFilters: React.FC = () => {
  const classes = useStyles();
  function openDrawer() {}
  return (
    <Fragment>
      <Grid item xs={12} sm={6}>
        <ExpansionPanel square classes={{ root: classes.expansionPanelRoot }}>
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
      </Grid>
    </Fragment>
  );
};

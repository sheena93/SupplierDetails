import React, { Fragment } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  AngleDownIcon,
  TypeBase,
  Grid,
} from "@c2fo/components";

import { useStyles } from "../SupplierFilter/SupplierFilter.style";
import { MultiFilterComponent } from "../MultiSelectFilter/MultiFilterWrapper";
import {
  SupplierInformation,
  ElligibleAp,
  OfferInformation,
  ClearingApr,
  ClearingDpe,
  NonclearingApr,
  NonclearingDpe,
  hasap,
  offerclearning,
  offernotclearning,
} from "../SupplierFilter/SupplierFilters.schema";
import { useAdvanceFilterHook, AdvanceFiltertype } from "./AdvanceFilterHook";

export const AdvanceFilters: React.FC = () => {
  const classes = useStyles();
  const filterHook: AdvanceFiltertype | null = useAdvanceFilterHook();
  const {
    supplier,
    setSupplier,
    elligibleAp,
    setElligibleAp,
    offerinfo,
    setOfferinfor,
    clearingApr,
    setClearingApr,
    clearingDpe,
    setClearingDpe,
    nonclearingApr,
    setNonclearingApr,
    nonclearingDpe,
    setNonclearingDpe,
  } = filterHook || {};

  return (
    <Fragment>
      <ExpansionPanel square classes={{ root: classes.expansionPanelRoot }}>
        <Grid item xs={12} sm={6}>
          <ExpansionPanelSummary
            expandIcon={<AngleDownIcon />}
            className={classes.advancedOptions}
            classes={{
              root: classes.expansionPanelSummaryRoot,
              content: classes.expansionPanelSummaryContentAdvance,
            }}
          >
            <TypeBase classes={{ root: classes.advanceFiltertitle }}>
              {" "}
               {/* todo add translation */}
              Advance Filter
            </TypeBase>
          </ExpansionPanelSummary>
        </Grid>
        <ExpansionPanelDetails
          classes={{ root: classes.expansionPanelDetailsRoot }}
        >
          <MultiFilterComponent
            title="Supplier Information"
            options={SupplierInformation}
            handleChange={setSupplier}
            value={supplier}
            data-testid="supplierInformation"
          ></MultiFilterComponent>
          {supplier && supplier[hasap] && (
            <MultiFilterComponent
              title="Elligible AP"
              options={ElligibleAp}
              handleChange={setElligibleAp}
              value={elligibleAp}
            ></MultiFilterComponent>
          )}
          <MultiFilterComponent
            title="Offer Information"
            options={OfferInformation}
            handleChange={setOfferinfor}
            value={offerinfo}
          ></MultiFilterComponent>
          {offerinfo && offerinfo[offerclearning] && (
            <div>
              <MultiFilterComponent
                title="Clearning APR"
                options={ClearingApr}
                handleChange={setClearingApr}
                value={clearingApr}
              ></MultiFilterComponent>
              <MultiFilterComponent
                title="Clearning DPE"
                options={ClearingDpe}
                handleChange={setClearingDpe}
                value={clearingDpe}
              ></MultiFilterComponent>{" "}
            </div>
          )}

          {offerinfo && offerinfo[offernotclearning] && (
            <div>
              <MultiFilterComponent
                title="Non-Clearning APR"
                options={NonclearingApr}
                handleChange={setNonclearingApr}
                value={nonclearingApr}
              ></MultiFilterComponent>
              <MultiFilterComponent
                title="Non-Clearning DPE"
                options={NonclearingDpe}
                handleChange={setNonclearingDpe}
                value={nonclearingDpe}
              ></MultiFilterComponent>{" "}
            </div>
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
};

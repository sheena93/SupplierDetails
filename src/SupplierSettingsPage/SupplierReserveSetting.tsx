import React, { useState, useCallback } from "react";
import {
  Divider,
  Grid,
  Liquidity,
  makeStyles,
  Theme,
  TextField,
  InputAdornment,
  TypeLabel,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TypeBase,
  Checkbox,
} from "@c2fo/components";
import { SupplierAPRSettings } from "./Supplier.schema";

const useStyles = makeStyles<Theme>((theme) => ({
  supplierContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  baseContainer: {
    borderRadius: 5,
  },
  supplierNameContainer: {
    padding: theme.spacing(2),
  },
  bottomContainer: {
    backgroundColor: Liquidity.colors.greys.background,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    padding: 8,
    margin: 2,
  },
  labels: {
    padding: theme.spacing(2),
    alignItems: "center",
  },

  textField: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    "& .MuiOutlinedInput-input": {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    width: "44ch",
    margin: theme.spacing(1),
    display: "grid",
  },
  saveButton: {
    padding: theme.spacing(1, 2.5),
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(2),
    },
  },
  radioButton: {
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: Liquidity.colors.feedback.success,
    },
  },
  sections: {
    paddingLeft: theme.spacing(1),
    display: "-webkit-box",
  },
  radiodisplay: {
    display: "flow-root",
  },
  divider: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  invoice:{
    paddingBottom: theme.spacing(2),
    display: "flex",
  },
  Checkbox: {
    padding: theme.spacing(2),
  },
  description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

let reserveSettings;

function saveReserveSettings(supplierAPRSettingsObject: SupplierAPRSettings) {
  reserveSettings = Object.assign({}, supplierAPRSettingsObject);
  console.log("reserveSettings", reserveSettings);
}

export const SupplierReserveSetting = () => {
  const classes = useStyles();

  const defaultState = {
    reserveType: "Percentage",
    reservePercentage: 0,
    reserveReason: "",
    invoicePriority: 0,
    runBeforeAdjustment: true,
    allowOverrides: true,
  };
  const [supplierAPRSettingsObject, setSupplierAPRSettings] = useState<
    SupplierAPRSettings
  >(defaultState);
  const percentageSymbol = "%";

  // const prevSettings = usePrevious<SupplierAPRSettings>(supplierAPRSettingsObject);
  // console.log("prevSettings",prevSettings)

  // const getKeyValue = <U extends keyof T, T extends object>(key: U, obj: T) =>
  // obj[key];

  // const changeSetting = useMemo(() => {
  //   for (const key in supplierAPRSettingsObject) {
  //     const element = getKeyValue(key, supplierAPRSettingsObject)
  //     if(typeof prevSettings === undefined || (prevSettings[key]!= element)) {
  //       return true;
  //     }
  // }
  // return false;
  // },[supplierAPRSettingsObject,prevSettings])

  const handleChange = useCallback(
    function (fieldName, fieldValue) {
      setSupplierAPRSettings(
        Object.assign({}, supplierAPRSettingsObject, {
          [fieldName]: fieldValue,
        })
      );
    },
    [supplierAPRSettingsObject]
  );

  const CHARACTER_LIMIT = 150;

  return (
    <Grid container className={classes.supplierContainer}>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.reserveType">  Reserve Type </T> */}
          Reserve Type
        </TypeBase>
        <FormControl className={classes.sections} component="fieldset">
          <RadioGroup
            value={supplierAPRSettingsObject.reserveType}
            name="reserveType"
            className={classes.radiodisplay}
            onChange={(e) => handleChange("reserveType", e.target.value)}
          >
            <FormControlLabel
              className={classes.radioButton}
              value="Percentage"
              data-testid="invoice-filters:all-invoices"
              control={<Radio />}
              //todo: label={<T k="maker.percentage">Percentage</T>}
              label="Percentage"
            />
            <FormControlLabel
              className={classes.radioButton}
              value="Amount"
              data-testid="invoice-filters:invoice-amount"
              control={<Radio />}
              // label={<T k="maker.amount">Amount</T>}
              label="Amount"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker.supplierReserveQuestion"> Do you want to reserve a percentage of the supplier's total invoice amount,or use specific amount? </T> */}
          Do you want to reserve a percentage of the supplier's total invoice
          amount,or use specific amount?
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.reservePercentage"> Reserve Percentage </T> */}
          {/* todo : i18 translation to be done <T k="maker.reserveAmount"> Reserve Amount </T> */}
          {supplierAPRSettingsObject.reserveType === "Percentage"
            ? "Reserve Percentage"
            : "Reserve Amount"}
        </TypeBase>
        <TextField
          className={classes.textField}
          variant="outlined"
          error={false}
          type="number"
          name="reservePercentage"
          value={supplierAPRSettingsObject.reservePercentage}
          onChange={(e) => handleChange("reservePercentage", e.target.value)}
          InputProps={
            supplierAPRSettingsObject.reserveType === "Percentage"
              ? {
                  endAdornment: (
                    <InputAdornment position="end" variant="filled">
                      {" "}
                      {percentageSymbol}
                    </InputAdornment>
                  ),
                }
              : {}
          }
        />
      </Grid>
      <Grid item xs={12} sm={7}></Grid>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.reserveReason"> Reserve Reason (optional) </T> */}
          Reserve Reason (optional)
        </TypeBase>
        <TextField
          className={classes.textField}
          name="reserveReason"
          multiline
          rows={3}
          value={supplierAPRSettingsObject.reserveReason}
          helperText={`${supplierAPRSettingsObject.reserveReason.length}/${CHARACTER_LIMIT}`}
          onChange={(e) => handleChange("reserveReason", e.target.value)}
          inputProps={{
            maxlength: CHARACTER_LIMIT,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.reserveInvoicePriority"> Invoice Priority </T> */}
          Invoice Priority
        </TypeBase>
        <TextField
          className={classes.textField}
          variant="outlined"
          error={false}
          type="number"
          name="invoicePriority"
          value={supplierAPRSettingsObject.invoicePriority}
          onChange={(e) => handleChange("invoicePriority", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={7} className={classes.labels}>
        <TypeLabel
          classes={{root: classes.invoice}}>
          {/* todo : i18 translation to be done <T k="maker.invoicePriorityDescription"> Invoice priority determine which invoices take precedence in
            covering reserve. </T> */}
          Invoice priority determine which invoices take precedence in covering
          reserve.
        </TypeLabel>

        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.dpeLowestToHighest"> Days paid early lowest to highest </T> */}
          Days paid early lowest to highest
        </TypeBase>
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker."dpeAscDescription> Invoice with due dates closer to today </T> */}
          Invoice with due dates closer to today
        </TypeLabel>
        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.dpeHighestToLowest"> Days paid early highest to lowest </T> */}
          Days paid early highest to lowest
        </TypeBase>
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker.dpeDescDescription"> Invoice with due dates farther into the future </T> */}
          Invoice with due dates farther into the future
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={5} className={classes.Checkbox}>
        <Checkbox
          name="runBeforeAdjustment"
          checked={supplierAPRSettingsObject.runBeforeAdjustment}
          onChange={(e) =>
            handleChange("runBeforeAdjustment", e.target.checked)
          }
        />
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker.runBeforeAdjustments"> Run before adjustment </T> */}
          Run before adjustment
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker.runBeforeAdjustmentsDescription"> Should the reserve calculation run before individual invoice adjustments? </T> */}
          Should the reserve calculation run before individual invoice
          adjustments?
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={5} className={classes.Checkbox}>
        <Checkbox
          name="allowOverrides"
          checked={supplierAPRSettingsObject.allowOverrides}
          onChange={(e) => handleChange("allowOverrides", e.target.checked)}
        />
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker.allowEslapUpdates"> Allow overrides? </T> */}
          Allow overrides?
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel>
          {/* todo : i18 translation to be done <T k="maker.allowEslapUpdatesDescription">  If checked, this settings can be overwritten by reserve settings in future file loads.</T> */}
          If checked, this settings can be overwritten by reserve settings in
          future file loads.
        </TypeLabel>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          className={classes.saveButton}
          disableElevation={true}
          color="inherit"
          onClick={(e) => saveReserveSettings(supplierAPRSettingsObject)}
        >
          {/* todo : i18 translation to be done <T k="maker.save"> Save </T> */}
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

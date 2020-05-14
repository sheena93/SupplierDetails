import React, { useCallback, useMemo } from "react";
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
  MenuItem,
} from "@c2fo/components";
import {
  ReserveSettings,
  INVOICE_PRIORITY,
  RESERVE_TYPE,
} from "./Supplier.schema";

const useStyles = makeStyles<Theme>((theme) => ({
  supplierContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    backgroundColor: "#008000",
    padding: theme.spacing(1, 2.5),
    color: "#000000",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(2, 0, 1, 4),
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
  invoice: {
    paddingBottom: theme.spacing(2),
    display: "flex",
  },
  Checkbox: {
    padding: theme.spacing(2),
  },
  description: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    alignItems: "center",
  },
}));

let previousSettingsPayload: ReserveSettings;
const CHARACTER_LIMIT = 150;
function saveReserveSettings(supplierReserveSetting: ReserveSettings) {
  previousSettingsPayload = Object.assign({}, supplierReserveSetting);
  console.log("previousSettingsPayload", previousSettingsPayload);
}
type ResrverProps = {
  supplierReserveSetting: ReserveSettings;
  setSupplierAPRSettings: Function;
};
const percentageSymbol = "%";

export const SupplierReserveSetting = ({
  supplierReserveSetting,
  setSupplierAPRSettings,
}: ResrverProps) => {
  const classes = useStyles();

  const changeSetting = useMemo(() => {
    if (!previousSettingsPayload) {
      return true;
    } else {const currentSettingsPayload: ReserveSettings = Object.assign( {},supplierReserveSetting );
      return (Object.entries(previousSettingsPayload).toString() === Object.entries(currentSettingsPayload).toString() );  }  }, [supplierReserveSetting, previousSettingsPayload]);

  const handleChange = useCallback(
    function (fieldName: keyof ReserveSettings, fieldValue) {
      if (!previousSettingsPayload) {
        previousSettingsPayload = Object.assign({}, supplierReserveSetting); }
      if (fieldName === "reserveType" && fieldValue != supplierReserveSetting[fieldName]) {
        const reserveFieldForNull =
          fieldValue != RESERVE_TYPE.PERCENTAGE? "reservePercentage": "reserveAmount";
        const reserveFieldUpdate =fieldValue == RESERVE_TYPE.PERCENTAGE  ? "reservePercentage": "reserveAmount";
           setSupplierAPRSettings(
            Object.assign({}, supplierReserveSetting, {
              [fieldName]: fieldValue,[reserveFieldForNull]: null,[reserveFieldUpdate]: supplierReserveSetting[reserveFieldForNull] }) );
      } else {  setSupplierAPRSettings(Object.assign({}, supplierReserveSetting, {  [fieldName]: fieldValue,  })  );}
    },
    [supplierReserveSetting, previousSettingsPayload]
  );

  const reserveTypeField =
    supplierReserveSetting.reserveType == RESERVE_TYPE.PERCENTAGE ? "reservePercentage" : "reserveAmount";
  return (
    <Grid container className={classes.supplierContainer}>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis data-testid="reserveType">
          {/* todo : i18 translation to be done <T k="maker.reserveType">  Reserve Type </T> */}
          Reserve Type
        </TypeBase>
        <FormControl className={classes.sections} component="fieldset">
          <RadioGroup
            value={supplierReserveSetting.reserveType}
            name="reserveType"
            className={classes.radiodisplay}
            onChange={(e) => handleChange("reserveType", e.target.value)}
          >
            <FormControlLabel
              className={classes.radioButton}
              value={RESERVE_TYPE.PERCENTAGE}
              data-testid="reservePercentage"
              control={<Radio />}
              //todo: label={<T k="maker.percentage">Percentage</T>}
              label="Percentage"
            />
            <FormControlLabel
              className={classes.radioButton}
              value={RESERVE_TYPE.AMOUNT}
              data-testid="reserveAmount"
              control={<Radio />}
              // label={<T k="maker.amount">Amount</T>}
              label="Amount"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel data-testid="percentamount">
          {/* todo : i18 translation to be done <T k="maker.supplierReserveQuestion"> Do you want to reserve a percentage of the supplier's total invoice amount,or use specific amount? </T> */}
          Do you want to reserve a percentage of the supplier's total invoice
          amount,or use specific amount?
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis>
          {/* todo : i18 translation to be done <T k="maker.reservePercentage"> Reserve Percentage </T> */}
          {/* todo : i18 translation to be done <T k="maker.reserveAmount"> Reserve Amount </T> */}
          {supplierReserveSetting.reserveType === RESERVE_TYPE.PERCENTAGE
            ? "Reserve Percentage"
            : "Reserve Amount"}
        </TypeBase>
        <TextField
          className={classes.textField}
          variant="outlined"
          error={false}
          type="number"
          name="reservePercentagetext"
          value={supplierReserveSetting[reserveTypeField]}
          onChange={(e) => handleChange(reserveTypeField, e.target.value)}
          InputProps={
            supplierReserveSetting.reserveType === RESERVE_TYPE.PERCENTAGE
              ? {
                  endAdornment: (
                    <InputAdornment position="end" variant="filled">
                      {" "}
                      {percentageSymbol}
                    </InputAdornment>
                ), } : {}  }
        />
      </Grid>
      <Grid item xs={12} sm={7}></Grid>
      <Grid item xs={12} sm={5} className={classes.labels}>
        <TypeBase isEmphasis data-testid="reservereason">
          {/* todo : i18 translation to be done <T k="maker.reserveReason"> Reserve Reason (optional) </T> */}
          Reserve Reason (optional)
        </TypeBase>
        <TextField
          className={classes.textField}
          name="reserveReason"
          data-testid="reserveReason"
          multiline
          rows={3}
          value={supplierReserveSetting.reserveReason}
          helperText={`${supplierReserveSetting.reserveReason.length}/${CHARACTER_LIMIT}`}
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
        <TypeBase isEmphasis data-testid="invoicepriority">
          {/* todo : i18 translation to be done <T k="maker.reserveInvoicePriority"> Invoice Priority </T> */}
          Invoice Priority
        </TypeBase>
        <TextField
          className={classes.textField}
          variant="outlined"
          error={false}
          select
          name="invoicePriority"
          value={supplierReserveSetting.invoicePriority}
          onChange={(e) => handleChange("invoicePriority", e.target.value)}
        >
          <MenuItem value={INVOICE_PRIORITY.LOW_TO_HIGH}>
            <TypeBase>
              {/* todo : i18 translation to be done <T k="maker.dpeLowestToHighes"> Days Paid Early Lowest to Highest </T> */}
              Days Paid Early Lowest to Highest
            </TypeBase>
          </MenuItem>
          <MenuItem value={INVOICE_PRIORITY.HIGH_TO_LOW}>
            <TypeBase>
              {/* todo : i18 translation to be done <T k="maker.dpeHighestToLowest"> Days Paid Early Highest to Lowest </T> */}
              Days Paid Early Highest to Lowest
            </TypeBase>
          </MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.labels}>
        <TypeLabel
          classes={{ root: classes.invoice }}
          data-testid="invoicedesc"
        >
          {/* todo : i18 translation to be done <T k="maker.invoicePriorityDescription"> Invoice priority determine which invoices take precedence in
            covering reserve. </T> */}
          Invoice priority determine which invoices take precedence in covering
          reserve.
        </TypeLabel>
        <TypeBase isEmphasis data-testid="lowtohigh">
          {/* todo : i18 translation to be done <T k="maker.dpeLowestToHighest"> Days paid early lowest to highest </T> */}
          Days paid early lowest to highest
        </TypeBase>
        <TypeLabel data-testid="invoicecloser">
          {/* todo : i18 translation to be done <T k="maker."dpeAscDescription> Invoice with due dates closer to today </T> */}
          Invoice with due dates closer to today
        </TypeLabel>
        <TypeBase isEmphasis data-testid="hightolow">
          {/* todo : i18 translation to be done <T k="maker.dpeHighestToLowest"> Days paid early highest to lowest </T> */}
          Days paid early highest to lowest
        </TypeBase>
        <TypeLabel data-testid="invoicefurther">
          {/* todo : i18 translation to be done <T k="maker.dpeDescDescription"> Invoice with due dates farther into the future </T> */}
          Invoice with due dates farther into the future
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={5} className={classes.Checkbox}>
        <Checkbox
          name="runBeforeAdjustments"
          data-testid="checkboxrun"
          checked={supplierReserveSetting.runBeforeAdjustments}
          onChange={(e) =>
            handleChange("runBeforeAdjustments", e.target.checked)
          }
        />
        <TypeLabel data-testid="runbefore">
          {/* todo : i18 translation to be done <T k="maker.runBeforeAdjustments"> Run before adjustment </T> */}
          Run before adjustment
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel data-testid="reservecalculation">
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
          data-testid="allowupdate"
          name="allowEslapUpdates"
          checked={supplierReserveSetting.allowEslapUpdates}
          onChange={(e) => handleChange("allowEslapUpdates", e.target.checked)}
        />
        <TypeLabel data-testid="allowaverride">
          {/* todo : i18 translation to be done <T k="maker.allowEslapUpdates"> Allow overrides? </T> */}
          Allow overrides?
        </TypeLabel>
      </Grid>
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel data-testid="futurefiles">
          {/* todo : i18 translation to be done <T k="maker.allowEslapUpdatesDescription">  If checked, this settings can be overwritten by reserve settings in future file loads.</T> */}
          If checked, this settings can be overwritten by reserve settings in
          future file loads.
        </TypeLabel>
      </Grid>
      <Grid item xs={12}>
        <Button
          role="savebutton"
          name="saveButton"
          variant="contained"
          className={classes.saveButton}
          data-testid="saveButton"
          disabled={changeSetting}
          disableElevation={true}
          color="inherit"
          onClick={(e) => saveReserveSettings(supplierReserveSetting)}
        >
          {/* todo : i18 translation to be done <T k="maker.save"> Save </T> */}
          Save
        </Button>
      </Grid>
    </Grid>
  );};

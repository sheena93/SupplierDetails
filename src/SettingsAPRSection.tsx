import React, { useState ,useCallback ,useMemo}  from "react";
import { usePrevious } from 'react-use';
import {
  Divider,
  Grid,
  Liquidity,
  makeStyles,
  Theme,
  TypeSubsectionHeader,
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
import { Paper, TextareaAutosize } from "@material-ui/core";
import { SupplierAPRSettings } from './supplier.schema';

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
    backgroundColor: '#008000',
    padding: theme.spacing(1, 2.5),
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
  divider:{
    margin: theme.spacing(0,0,2,0)
  }
}));

let minimumapr:string;
let reserveSettings;

function SaveAPR(aprvalue: string) {
  minimumapr = aprvalue;
  console.log("minimumapr", minimumapr);
}

function saveReserveSettings(supplierAPRSettingsObject: SupplierAPRSettings)
{
  reserveSettings = Object.assign({},supplierAPRSettingsObject)
  console.log("reserveSettings",reserveSettings)
}


const SettingsAPRSection: React.FC = () => {
  const classes = useStyles();
  const [aprvalue, setValue] = useState<string>("");
  const defaultState = 
  { reserveType: 'Percentage',
    reservePercentage: 0,
    reserveReason: "",
    invoicePriority: 0,
    runBeforeAdjustment: true,
    allowOverrides: true}
  const [supplierAPRSettingsObject, setSupplierAPRSettings] = useState<SupplierAPRSettings>(defaultState);
  const percentageSymbol = "%";

  // const prevSettings = usePrevious<SupplierAPRSettings>(supplierAPRSettingsObject); 
  // console.log("prevSettings",prevSettings)


  // const changeSetting = useMemo(() => {
  //   for (const key in supplierAPRSettingsObject) { 
  //     if( prevSettings && (prevSettings[key]!= supplierAPRSettingsObject[key])) {
  //       return true;
  //     }   
  // }
  // return false;
  // },[supplierAPRSettingsObject,prevSettings])
 
  

  const handleChange = useCallback(
    function(fieldName, fieldValue) {
      setSupplierAPRSettings(
        Object.assign({},supplierAPRSettingsObject, {[fieldName]: fieldValue})
      );
    },
    [supplierAPRSettingsObject]
  );

  const renderMinimumAprFirstSection = () => {
    return (
      <Grid container className={classes.supplierContainer}>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            variant="outlined"
            error={false}
            type="number"
            name="APR"
            value={aprvalue}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" variant="filled">
                  {" "}
                  {percentageSymbol}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="maker.supplierMinimumAprHelpText"> Minimum APR you are willing to accept from this supplier </T> */}
            Minimum APR you are willing to accept from this supplier
          </TypeLabel>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.saveButton}
            disabled= {aprvalue == minimumapr}
            // disableElevation={true}
            color="inherit"
            onClick={(e) => SaveAPR(aprvalue)}
          >
            {/* todo : i18 translation to be done <T k="Save"> Save </T> */}
            Save
          </Button>
        </Grid>
      </Grid>
    );
  };

  const renderMinimumAprSecondSection = () => {
    return (
      <Grid container className={classes.supplierContainer}>
        <Grid item xs={12} sm={6} className={classes.labels}>
          <TypeBase isEmphasis>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Minimum APR you are willing to accept from this supplier </T> */}
            Reserve Type
          </TypeBase>
          <FormControl className={classes.sections} component="fieldset">
            <RadioGroup
              value={supplierAPRSettingsObject.reserveType}
              name="reserveType"
              className={classes.radiodisplay}
              onChange={e => handleChange('reserveType', e.target.value)}
            >
              <FormControlLabel
                className={classes.radioButton}
                value="Percentage"
                data-testid="invoice-filters:all-invoices"
                control={<Radio />}
                // label={<T k="percentage">Percentage</T>}
                label="Percentage"
              />
              <FormControlLabel
                className={classes.radioButton}
                value="Amount"
                data-testid="invoice-filters:invoice-amount"
                control={<Radio />}
                // label={<T k="invoicesFilters.invoiceAmount.range">Invoice amount</T>}
                label="Amount"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.labels}>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Do you want to reserve a percentage of the supplier's total invoice amount,or use specific amount? </T> */}
            Do you want to reserve a percentage of the supplier's total invoice
            amount,or use specific amount?
          </TypeLabel>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.labels}>
          <TypeBase isEmphasis>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Reserve Percentage </T> */}
            { supplierAPRSettingsObject.reserveType == 'Percentage' ? "Reserve Percentage" : "Reserve Amount"}
          </TypeBase>
          <TextField
            className={classes.textField}
            variant="outlined"
            error={false}
            type="number"
            name="reservePercentage"
            value={supplierAPRSettingsObject.reservePercentage}
            onChange={(e) => handleChange("reservePercentage", e.target.value)}
            
            InputProps= {supplierAPRSettingsObject.reserveType == 'Percentage' ? {
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
        <Grid item xs={12} sm={12} className={classes.labels}>
          <TypeBase isEmphasis>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Reserve Reason (optional) </T> */}
            Reserve Reason (optional)
          </TypeBase>
          <TextareaAutosize rowsMin={4} className={classes.textField} 
            name="reserveReason"
            value={supplierAPRSettingsObject.reserveReason}
            onChange={(e) => handleChange("reserveReason", e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.labels}>
          <TypeBase isEmphasis>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Invoice Priority </T> */}
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
        <Grid item xs={12} sm={6} className={classes.labels}>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Invoice priority determine which invoices take precedence in
            covering reserve. </T> */}
            Invoice priority determine which invoices take precedence in
            covering reserve.
          </TypeLabel>
          <TypeBase isEmphasis>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Days paid early lowest to highest </T> */}
            Days paid early lowest to highest
          </TypeBase>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Invoice with due dates closer to today </T> */}
            Invoice with due dates closer to today
          </TypeLabel>
          <TypeBase isEmphasis>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Days paid earlyhighest to lowest </T> */}
            Days paid earlyhighest to lowest
          </TypeBase>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Invoice with due dates farther into the future </T> */}
            Invoice with due dates farther into the future
          </TypeLabel>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Checkbox             
            name="runBeforeAdjustment"
            checked={supplierAPRSettingsObject.runBeforeAdjustment}
            onChange={(e) => handleChange("runBeforeAdjustment", e.target.checked)}
             />
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Run before adjustment </T> */}
            Run before adjustment
          </TypeLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Should the reserve calculation run before individual invoice adjustments? </T> */}
            Should the reserve calculation run before individual invoice adjustments?
          </TypeLabel>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Checkbox
           name="allowOverrides"
           checked={supplierAPRSettingsObject.allowOverrides}
           onChange={(e) => handleChange("allowOverrides", e.target.checked)}
           />
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier"> Allow overrides? </T> */}
            Allow overrides?
          </TypeLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="minimumAprSupllier">  If checked, this settings can be overwritten by reserve settings in future file loads.</T> */}
            If checked, this settings can be overwritten by reserve settings in future file loads.
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
            {/* todo : i18 translation to be done <T k="Save"> Save </T> */}
            Save
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      <Paper className={classes.baseContainer}>
        <div className={classes.supplierNameContainer}>
          <TypeSubsectionHeader>
            {/* todo : i18 translation to be done <T k="MinimumAPR"> Minimum APR </T> */}
            Minimum APR
          </TypeSubsectionHeader>
        </div>
        <Divider />
        {renderMinimumAprFirstSection()}
        <Divider />
      </Paper>
      <Paper className={classes.baseContainer}>
        <div className={classes.supplierNameContainer}>
          <TypeSubsectionHeader>
            {/* todo : i18 translation to be done <T k="Reserve"> Reserve </T> */}
            Reserve
          </TypeSubsectionHeader>
        </div>
        <Divider />
        {renderMinimumAprSecondSection()}
        <Divider />
      </Paper>
    </div>
  );
};

export default SettingsAPRSection;

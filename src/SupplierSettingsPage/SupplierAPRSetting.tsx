import React, { useState, useMemo, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Theme,
  TextField,
  InputAdornment,
  TypeLabel,
  Button,
} from "@c2fo/components";
import { SupplierSetting, PayLoadAPRSettings } from "./Supplier.schema";

const useStyles = makeStyles<Theme>((theme) => ({
  supplierContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  labels: {
    padding: theme.spacing(2),
    alignItems: "center"
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
    color: "#FFFFFF",
    padding: theme.spacing(2, 2.5),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(2,0,1,4),
    },
  },
  description: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    alignItems: "center",
  },
}));
let previousMinimumApr: string;
const percentageSymbol = "%";

type APRProps = {
  supplierAPRSetting: SupplierSetting,
}
export const SupplierAPRSetting = ({ supplierAPRSetting }: APRProps) => {
  const classes = useStyles();
  const [aprvalue, setValue] = useState<string>("");

  useEffect( function (){
    previousMinimumApr =supplierAPRSetting.minReturnAmount.toString()
    setValue(previousMinimumApr)
  },[supplierAPRSetting.minReturnAmount])

  function SaveAPR(aprvalue: string) {
    const aprObject: PayLoadAPRSettings = {
      // divisionId: supplierAPRSetting.divisionId,
      marketId: supplierAPRSetting.marketId,
      takerId: supplierAPRSetting.takerId,
      // marketTakerConfigurationId: supplierAPRSetting.marketTakerConfigurationId,
      minReturnAmount: Number(aprvalue) || 0
    }
    previousMinimumApr = aprvalue;
    console.log("aprObject",aprObject)
  }

  const changeAPRSetting = useMemo(() => {
    if (!previousMinimumApr)
      return false;
    else {
      return previousMinimumApr == aprvalue;
    }
  }, [previousMinimumApr, aprvalue])

  return (
    <Grid container className={classes.supplierContainer}>
      <Grid item xs={12} sm={5} className={classes.labels}>
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
      <Grid item xs={12} sm={7} className={classes.description}>
        <TypeLabel data-testid="minimumaprs">
          {/* todo : i18 translation to be done <T k="maker.supplierMinimumAprHelpText"> Minimum APR you are willing to accept from this supplier </T> */}
          Minimum APR you are willing to accept from this supplier
        </TypeLabel>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          role="savebutton"
          data-testid="saveButton"
          className={classes.saveButton}
          disabled={changeAPRSetting}
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

import React, { useState }  from "react";
import {
  Grid,
  Liquidity,
  makeStyles,
  Theme,
  TextField,
  InputAdornment,
  TypeLabel,
  Button,
} from "@c2fo/components";

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
    color: "#FFFFFF",
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
  description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));
let minimumapr:string;


function SaveAPR(aprvalue: string) {
  minimumapr = aprvalue;
  console.log("minimumapr", minimumapr);
}
  export const SupplierAPRSetting = () => {
    const classes = useStyles();
    const [aprvalue, setValue] = useState<string>("");
    const percentageSymbol = "%";
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
        <Grid item xs={12} sm={6} className={classes.description}>
          <TypeLabel>
            {/* todo : i18 translation to be done <T k="maker.supplierMinimumAprHelpText"> Minimum APR you are willing to accept from this supplier </T> */}
            Minimum APR you are willing to accept from this supplier
          </TypeLabel>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.saveButton}
            disabled= {aprvalue === minimumapr}
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

 
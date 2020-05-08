import React  from "react";
import {
  Divider,
  Liquidity,
  makeStyles,
  Theme,
  TypeSubsectionHeader,
} from "@c2fo/components";
import { Paper } from "@material-ui/core";
import {SupplierReserveSetting} from "./SupplierReserveSetting"
import { SupplierAPRSetting } from "./SupplierAPRSetting";

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
  papergap: {
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
}));

const SupplierSettingsSections: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.baseContainer}>
        <div className={classes.supplierNameContainer}>
          <TypeSubsectionHeader>
            {/* todo : i18 translation to be done <T k="maker.minimumApr"> Minimum APR </T> */}
            Minimum APR
          </TypeSubsectionHeader>
        </div>
        <Divider />
        {SupplierAPRSetting()}
        <Divider />
      </Paper>
      <div className={classes.papergap}>      </div>
      <Paper className={classes.baseContainer}>
        <div className={classes.supplierNameContainer}>
          <TypeSubsectionHeader>
            {/* todo : i18 translation to be done <T k="maker.reserve"> Reserve </T> */}
            Reserve
          </TypeSubsectionHeader>
        </div>
        <Divider />
        {SupplierReserveSetting()}
        <Divider />
      </Paper>
    </div>
  );
};

export default SupplierSettingsSections;

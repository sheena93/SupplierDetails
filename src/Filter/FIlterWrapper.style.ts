import { Liquidity, makeStyles, Theme } from '@c2fo/components';

export const useStyles = makeStyles<Theme>(theme => ({
  addFiltersTitle: {
    padding: theme.spacing(2, 3),
  },
  filterButtons: {
    padding: theme.spacing(4, 3),
  },
  applyButton: {
    padding: theme.spacing(1, 6),
  },
  cancelButton: {
    background: Liquidity.colors.greys.light,
    padding: theme.spacing(1, 6),
  },
  resetFilters: {
    color: Liquidity.colors.main.midBlue,
    margin: theme.spacing(5, 2),
    textTransform: 'uppercase',
  },
  drawerPaper: {
    height: "100%",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  Drawerchildren: {
    height: "90%",
    overflowY: "auto",
    overflowX: "hidden",
  },
  spacer: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    width: "300px",
    "@media (min-width: 300px)": {
      width: "375px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "inherit",
  },
}));

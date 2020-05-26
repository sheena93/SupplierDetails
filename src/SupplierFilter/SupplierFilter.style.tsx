import { Liquidity, makeStyles, Theme } from '@c2fo/components';


export const useStyles = makeStyles<Theme>(theme => ({
  filter: {
    color: Liquidity.colors.main.midBlue,
    marginTop: theme.spacing(0),
    spacingBottom: 0,
    paddingLeft: theme.spacing(1),
  },
  radioGroupContainer: {
    paddingLeft: theme.spacing(2),
    color: Liquidity.colors.main.midBlue,
  },
  addFiltersTitle: {
    fontSize: theme.typography.pxToRem(18),
    padding: theme.spacing(2),
    fontWeight: 'bold',
  },
  QuickFilterTitle: {
    backgroundColor: Liquidity.colors.greys.light,
    padding: theme.spacing(1.5),
    fontSize: theme.typography.pxToRem(15),
  },

  AdvanceFilterTitle: {
    backgroundColor: Liquidity.colors.greys.light,
    margin: theme.spacing(1,0,0,0),
    fontSize: theme.typography.pxToRem(15),
  },
  filterTitle: {
    float: 'right',
    display: 'inline',
  },
  expansionPanelRoot: {
    boxShadow: 'none',
  },
  expansionPanelSummaryRoot: {
    padding: 0,
    '&.Mui-expanded': {
      minHeight: 0,
    },
  },
  expansionPanelSummaryContent: {
    margin: theme.spacing(0, 0, 0, 1),
    '&.Mui-expanded': {
      margin: theme.spacing(0, 0, 0, 1),
    },
  },
  expansionPanelSummaryContentAdvance: {
    margin: 0,
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  expansionPanelDetailsRoot: {
    padding: theme.spacing(1, 0, 0, 0),
    display: "flex",
    flexDirection: "column"
  },
  formControl:{
    padding: theme.spacing(0, 0, 0, 2),
  },
  advanceFiltertitle: {
    color: Liquidity.colors.main.midBlue,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    textTransform: 'uppercase',
  },
}));
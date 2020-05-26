import { Liquidity, makeStyles, Theme } from '@c2fo/components';


export const useStyles = makeStyles<Theme>(theme => ({
  drawer: {
    width: '350px',
    '@media (min-width: 350px)': {
      width: '350px',
    },
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  drawerPaper: {
    overflowX: 'hidden',
    overflowY: 'auto',
    height: "100%",
  },
  addFiltersTitle: {
    fontSize: theme.typography.pxToRem(18),
    padding: theme.spacing(2),
    fontWeight: 'bold',
  },
  filterTitle: {
    float: 'right',
    display: 'inline',
  },
  filterButtons: {
    padding: theme.spacing(4, 1),
  },
  applyButton: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  cancelButton: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
  },
  resetFilters: {
    color: Liquidity.colors.main.midBlue,
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(5),
    textTransform: 'uppercase',
  },
}));
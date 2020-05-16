import { Liquidity, makeStyles, Theme } from '@c2fo/components';


export const useStyles = makeStyles<Theme>(theme => ({
  filter: {
    color: Liquidity.colors.main.midBlue,
    marginTop: theme.spacing(0),
    spacingBottom: 0,
    paddingLeft: theme.spacing(1),
  },
  filterIcon: {
    display: 'flex',
  },
  drawer: {
    width: '300px',
    '@media (min-width: 350px)': {
      width: '350px',
    },
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
  card: {
    padding: theme.spacing(2),
  },
  customDateContainer: {
    paddingLeft: theme.spacing(4),
  },
  datepicker: {
    display: 'block',
    margin: theme.spacing(1),
    width: '65%',
    boxSizing: 'content-box',
  },
  filterTitle: {
    float: 'right',
    display: 'inline',
  },
  filterButtons: {
    width: '100%',
    marginTop: '145px',
    textAlign: 'center',
    padding: theme.spacing(2),
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
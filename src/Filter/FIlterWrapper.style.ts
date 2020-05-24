import { Liquidity, makeStyles, Theme } from '@c2fo/components';


export const useStyles = makeStyles<Theme>(theme => ({
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
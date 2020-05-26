import { Liquidity, makeStyles, Theme } from '@c2fo/components';

export const useStyles = makeStyles<Theme>(theme => ({
  addFiltersTitle: {
    padding: theme.spacing(2, 3),
  },
  filterButtons: {
    marginTop: theme.spacing(15),
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
}));

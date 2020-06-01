import { Liquidity, makeStyles, Theme } from '@c2fo/components';

export const useStyles = makeStyles<Theme>(theme => ({
  // @TODO, Fix this height and margin
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  table: {
    minWidth: '100%',
  },
  allClearedText: {
    padding: theme.spacing(1),
  },
  supplierNameCell: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: Liquidity.colors.main.secondary,
  },
  tableContainer: {
    tableLayout: 'fixed',
  },
}));
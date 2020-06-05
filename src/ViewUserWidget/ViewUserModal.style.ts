import { makeStyles, Theme } from '@c2fo/components';

export const useStyles = makeStyles<Theme>(theme => ({
  footerContainer: {
    textAlign: 'left',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  footerNote:{
    flexBasis: "70%"
  },
  userNameContainer: {
    padding: theme.spacing(0.5),
    fontSize: '2.25rem',
    fontWeight: 400,
  },
  viewUserCellContent:{
    textOverflow: 'ellipsis',
    width: '90%',
    overflow: 'hidden',
  },
  tableContainer: {
    tableLayout: 'fixed',
  },
  closeButton:{
    margin: theme.spacing(4),
  }

}));
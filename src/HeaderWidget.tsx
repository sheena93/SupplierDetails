import * as React from 'react';
import { Divider, makeStyles, Paper, TypeSubsectionHeader } from '@c2fo/components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
  },
  header: {
    padding: 8,
  },
});

interface UserDataProviderProps {
  title: string;
  children?: React.ReactNode;
}

const HeaderWidget: React.FC<UserDataProviderProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <TypeSubsectionHeader>{title}</TypeSubsectionHeader>
      </div>
      <Divider />
      {children}
    </Paper>
  );
};

export default HeaderWidget;

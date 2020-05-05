import * as React from 'react';
import {Liquidity, makeStyles, Theme} from '@c2fo/components';

const useStyles = makeStyles<Theme>(theme => ({
    container: {
        minHeight: 800,
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        paddingTop: theme.spacing(2),
    },
    body: {
        backgroundColor: Liquidity.colors.main.secondary,
    },
}));

const Container: React.FC = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>{children}</div>
        </div>);
};

export default Container;

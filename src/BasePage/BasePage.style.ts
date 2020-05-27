import {Liquidity, makeStyles, Theme} from '@c2fo/components';

export const useStyles = makeStyles<Theme>(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        '& a': {
            textDecoration: 'none',
        },
    },
    backgroundBar: {
        height: 350,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: -1,
    },
    header: {
        flexShrink: 0,
    },
    body: {
        backgroundColor: "white",
    },
    footerContainer: {
        backgroundColor: Liquidity.colors.main.darkBlue,
        flexShrink: 0,
        padding: theme.spacing(3),
    },
    footerContent: {
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        color: 'white',
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
    },
    badges: {
        height: theme.typography.pxToRem(50),
    },
}));

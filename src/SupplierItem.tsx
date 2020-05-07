import React from 'react';
import {Liquidity, makeStyles, TypeCallout, TypeHelper, TypeLabel} from '@c2fo/components';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aprContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
type ClearingStatsProps = {
    titleKey: string;
    amount: number;
    totalAmount: number;
    apr: number;
    dpe: number;
    currency: string;
    color: string;
};

const SupplierItem: React.FC<ClearingStatsProps> = ({
                                                        titleKey,
                                                        amount,
                                                        totalAmount,
                                                        apr,
                                                        dpe,
                                                        currency,
                                                        color,
                                                    }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <TypeLabel>
                {titleKey}
            </TypeLabel>
            <TypeCallout data-testid="clearingStatsAmount">
                {`${currency} ${amount}`}
            </TypeCallout>
            <div className={classes.aprContainer}>
                <TypeHelper customColor={Liquidity.colors.greys.mid}>
                    {`${apr} APR`}
                </TypeHelper>
                <TypeHelper>&nbsp;|&nbsp;</TypeHelper>
                <TypeHelper customColor={Liquidity.colors.greys.mid}>
                    {`${dpe} DPE`}
                </TypeHelper>
            </div>
        </div>
    );
}

export default SupplierItem;

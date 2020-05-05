import React from "react";
import {Chip, Divider, Grid, Liquidity, makeStyles, Theme, TypeHelper, TypeSubsectionHeader} from "@c2fo/components";
import SupplierItem from "./SupplierItem";
import {currentMarketMockData} from "./SupplierMockData";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles<Theme>(theme => ({
    supplierContainer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    baseContainer: {
        borderRadius: 5,
    },
    supplierNameContainer: {
        padding: theme.spacing(2),
    },
    bottomContainer: {
        backgroundColor: Liquidity.colors.greys.background,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        padding: 8,
        margin: 2,
    },
}));

const SupplierStats: React.FC = () => {
    const classes = useStyles();

    const renderMarketClearingStats = () => {
        return (
            currentMarketMockData && (
                <Grid container className={classes.supplierContainer}>
                    <Grid item xs={12} sm={6}>
                        <SupplierItem
                            amount={currentMarketMockData.stats.blendedClearingEarn || 0}
                            apr={currentMarketMockData.stats.blendedClearingAprWeightedAvg}
                            currency={currentMarketMockData?.currency}
                            dpe={currentMarketMockData.stats.blendedClearingDpeWeightedAvg}
                            totalAmount={
                                currentMarketMockData.stats.blendedClearingInvoiceAmount
                            }
                            titleKey="Clearing AP"
                            color={Liquidity.colors.main.primary}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SupplierItem
                            amount={currentMarketMockData.stats.notAcceptedEarn || 0}
                            apr={currentMarketMockData.stats.notAcceptedAprWeightedAvg}
                            currency={currentMarketMockData?.currency}
                            dpe={currentMarketMockData.stats.notAcceptedDpeWeightedAvg}
                            totalAmount={currentMarketMockData.stats.notAcceptedInvoiceAmount}
                            titleKey="Non-Clearing AP"
                            color={Liquidity.colors.feedback.error}
                        />
                    </Grid>
                </Grid>
            )
        );
    };

    return (
        <Paper className={classes.baseContainer}>
            <div className={classes.supplierNameContainer}>
                <TypeSubsectionHeader> Guimarra Intl Berry LLC - CAD </TypeSubsectionHeader>
                <TypeHelper>Supplier Id : 1000-10-1000</TypeHelper>
                {/*todo Sheena fix styling and alignment*/}
                {/*<Chip color="secondary" label="Active"/>*/}
            </div>
            <Divider/>
            {renderMarketClearingStats()}
            <Divider/>
        </Paper>
    );
};

export default SupplierStats;

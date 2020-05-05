import React, { useMemo } from "react";
import { Divider, Grid, Liquidity, makeStyles,TypeSubsectionHeader } from "@c2fo/components";
import HeaderWidget from "./HeaderWidget";
import SupplierItem from "./SupplierItem";
import { currentMarketMockData } from "./SupplierMockData";

const useStyles = makeStyles({
  supplierContainer: {
    padding: 8,
  },
  bottomContainer: {
    backgroundColor: Liquidity.colors.greys.background,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    padding: 8,
    margin: 2,
  },
});

const SupplierStats: React.FC = () => {
  const classes = useStyles();

  const renderMarketClearingStats = () => {
    return (
      currentMarketMockData && (
        <div>
       
        <Grid container className={classes.supplierContainer}>
          
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
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
        </div>
      )
    );
  };

  return (
    <HeaderWidget title=''>
       <TypeSubsectionHeader> Guimarra Intl Berry LLC - CAD </TypeSubsectionHeader>
       <Divider />
      {renderMarketClearingStats()}
      <Divider />
    </HeaderWidget>
  );
};

export default SupplierStats;

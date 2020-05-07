export interface SupplierAPRSettings {
    reserveType: string;
    reservePercentage: number;
    reserveReason: string;
    invoicePriority: number;
    runBeforeAdjustment: boolean;
    allowOverrides: boolean;
    // maxDiscount?: number | null;
  }
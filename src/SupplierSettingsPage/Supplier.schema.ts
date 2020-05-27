export interface SupplierSetting {
  id: number;
  marketId: number;
  takerId: number;
  created: string;
  updated: string;
  minReturnAmount: number;
  minimumLoanAmount?: number|null;
  supplierCreditLine?: number|null;
  maxApr?: number|null;
  isParticipating: boolean;
  reserveSettings: ReserveSettings;
}

export interface ReserveSettings {
  id: number;
  marketId: number;
  takerId: number;
  reservePercentage: number|null;
  reserveAmount: number|null
  invoicePriority: string;
  runBeforeAdjustments: boolean;
  created: string;
  updated: string;
  reserveReason: string;
  allowEslapUpdates: boolean;
  reserveType? : string;
}

export const defaultReserveSetting:ReserveSettings  = {
  id: 0,
  marketId: 0,
  takerId: 0,
  reservePercentage: null,
  reserveAmount:null,
  reserveReason: "",
  invoicePriority: "",
  runBeforeAdjustments: true,
  allowEslapUpdates: true,
  created: "",
  updated: "",
  reserveType: ""
};

export const defaultAprSetting:SupplierSetting ={
  id: 0,
  marketId: 0,
  takerId: 0,
  created: "",
  updated:"",
  minReturnAmount: 0,
  minimumLoanAmount: null,
  supplierCreditLine: null,
  maxApr: null,
  isParticipating: true,
  reserveSettings: Object.assign({},defaultReserveSetting)

}

  export enum INVOICE_PRIORITY {
    LOW_TO_HIGH = 'dueDate asc',
    HIGH_TO_LOW = 'dueDate desc',
  };
  
  export enum RESERVE_TYPE {
    AMOUNT = 'amount',
    PERCENTAGE = 'percentage',
  };


  // export interface PayLoadReserveSetting extends ReserveSettings {
  //  reserveType : string
  // }

  export interface PayLoadAPRSettings{
    //  divisionId: number;
     marketId: number;
     takerId: number;
    //  marketTakerConfigurationId: number;
     minReturnAmount: number;
  }
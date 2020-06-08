export const QuickFiltersOptions: Array<QuickFiltersInterface>=[
{label :  "All Suppliers", value :"allSuppliers"},
{label :  "Current Market", value :"currentMarket"},
{label :  "Non-Clearing", value :"nonClearing"},
]

export interface QuickFiltersInterface {
    label : string,
    value : string
}

export const hasAp:string = "hasAp"
export const offerClearing:string ="offerClearing"
export const offerNotClearing:string ="offerNotClearing"

export const SupplierInformation: Array<QuickFiltersInterface>=[
    {label :  "Is Registered", value :"isRegistered"},
    {label :  "Is not Registered", value :"isNotRegistered"},
    {label :  "Has AP", value :hasAp},
    {label :  "Does not have AP", value :"haveNoAp"}
]

export const ElligibleAp: Array<QuickFiltersInterface>=[
    {label :  "400k or Less", value :"400k"},
    {label :  "400k to 800k", value :"400kTo800k"},
    {label :  "800k to 1.2m", value :"800mTo1.2m"},
    {label :  "1.2m or more", value :"1.2mOrMore"}
]


export const OfferInformation: Array<QuickFiltersInterface>=[
    {label :  "Has placed offer", value :"hasPlacedOffer"},
    {label :  "Has not placed offer", value :"hasNotPlacedOffer"},
    {label :  "Offer is clearing", value :offerClearing},
    {label :  "Offer is not clearing", value :offerNotClearing}
]

export const ClearingApr: Array<QuickFiltersInterface>=[
    {label :  "3.00% or Less", value :"3.0%OrLessClearing"},
    {label :  "3.00% to 5.99%", value :"3To5Clearing"},
    {label :  "6.00% to 8.99%", value :"6To8Clearing"},
    {label :  "9.00% or more", value :"9OrMoreClearing"}
]

export const ClearingDpe: Array<QuickFiltersInterface>=[
    {label :  "10 or Less", value :"10OrLessClearing"},
    {label :  "10 to 19.99", value :"10To19Clearing"},
    {label :  "20 to 29.99", value :"20To29Clearing"},
    {label :  "30 or more", value :"30OrMoreClearing"}
]

export const NonClearingApr: Array<QuickFiltersInterface>=[
    {label :  "3.00% or Less", value :"3.0%OrLessNonClearing"},
    {label :  "3.00% to 5.99%", value :"3To5NonClearing"},
    {label :  "6.00% to 8.99%", value :"6To8NonClearing"},
    {label :  "9.00% or more", value :"9OrMoreNonClearing"}
]

export const NonClearingDpe: Array<QuickFiltersInterface>=[
    {label :  "10 or Less", value :"10OrlessNonClearing"},
    {label :  "10 to 19.99", value :"10To19NonClearing"},
    {label :  "20 to 29.99", value :"20To29NonClearing"},
    {label :  "30 or more", value :"30OrMoreNonClearing"}
]
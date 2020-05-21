export const QuickFiltersOptions: Array<QuickFiltersInterface>=[
{lable :  "All Suppliers", value :"allsuppliers"},
{lable :  "Current Market", value :"currentmarket"},
{lable :  "Non-Clearing", value :"nonclearing"},
]

export interface QuickFiltersInterface {
    lable : string,
    value : string
}


export const SupplierInformation: Array<QuickFiltersInterface>=[
    {lable :  "Is Registered", value :"isregistered"},
    {lable :  "Is not Registered", value :"isnotregistered"},
    {lable :  "Has AP", value :"hasap"},
    {lable :  "Does not have AP", value :"havenoap"}
]

export const ElligibleAp: Array<QuickFiltersInterface>=[
    {lable :  "400k or Less", value :"400k"},
    {lable :  "400k to 800k", value :"400kto800k"},
    {lable :  "800k to 1.2m", value :"800mto1.2m"},
    {lable :  "1.2m or more", value :"1.2mormore"}
]


export const OfferInformation: Array<QuickFiltersInterface>=[
    {lable :  "Has placed offer", value :"hasplacedoffer"},
    {lable :  "Has not placed offer", value :"hasnotplacedoffer"},
    {lable :  "Offer is clearing", value :"offerclearning"},
    {lable :  "Offer is not clearing", value :"offernotclearning"}
]

export const ClearingApr: Array<QuickFiltersInterface>=[
    {lable :  "3.00% or Less", value :"3.0%orless"},
    {lable :  "3.00% to 5.99%", value :"hasnotplacedoffer"},
    {lable :  "6.00% to 8.99%", value :"offerclearning"},
    {lable :  "9.00% or more", value :"offernotclearning"}
]
export const QuickFiltersOptions: Array<QuickFiltersInterface>=[
{lable :  "All Suppliers", value :"allsuppliers"},
{lable :  "Current Market", value :"currentmarket"},
{lable :  "Non-Clearing", value :"nonclearing"},
]

export interface QuickFiltersInterface {
    lable : string,
    value : string
}

export const hasap:string = "hasap"

export const SupplierInformation: Array<QuickFiltersInterface>=[
    {lable :  "Is Registered", value :"isregistered"},
    {lable :  "Is not Registered", value :"isnotregistered"},
    {lable :  "Has AP", value :hasap},
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
    {lable :  "3.00% or Less", value :"3.0%orlessclearning"},
    {lable :  "3.00% to 5.99%", value :"3to5clearning"},
    {lable :  "6.00% to 8.99%", value :"6to8clearing"},
    {lable :  "9.00% or more", value :"9ormoreclearning"}
]

export const ClearingDpe: Array<QuickFiltersInterface>=[
    {lable :  "10 or Less", value :"10orlessclearning"},
    {lable :  "10 to 19.99", value :"10to19clearning"},
    {lable :  "20 to 29.99", value :"20to29clearning"},
    {lable :  "30 or more", value :"30ormoreclearning"}
]

export const NonclearingApr: Array<QuickFiltersInterface>=[
    {lable :  "3.00% or Less", value :"3.0%orlessnonclearning"},
    {lable :  "3.00% to 5.99%", value :"3to5nonclearning"},
    {lable :  "6.00% to 8.99%", value :"6to8nonclearing"},
    {lable :  "9.00% or more", value :"9ormorenonclearning"}
]

export const NonclearingDpe: Array<QuickFiltersInterface>=[
    {lable :  "10 or Less", value :"10orlessnonclearning"},
    {lable :  "10 to 19.99", value :"10to19nonclearning"},
    {lable :  "20 to 29.99", value :"20to29nonclearning"},
    {lable :  "30 or more", value :"30ormorenonclearning"}
]
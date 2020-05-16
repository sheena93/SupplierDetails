export const QuickFiltersOptions: Array<QuickFiltersInterface>=[
{lable :  "All Suppliers", value :"allsuppliers"},
{lable :  "Current Market", value :"currentmarket"},
{lable :  "Non-Clearing", value :"nonclearing"},
]

export interface QuickFiltersInterface {
    lable : string,
    value : string
}
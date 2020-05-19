import React, { Fragment, useState, useEffect } from 'react';
import { FilterDrawerComponent } from "../Filter/CommonFilterComponent";
import { SupplierFilters,useQuickFilter } from "./SupplierFilters";
import {Button} from "@c2fo/components";
import { useStyles } from "../Filter/CommonFIlterComponent.style";



const RenderDrawer: React.FC = () => {
const classes = useStyles();
const [showDrawer, setshowDrawer] = useState(false); 
const [selectedFilter,setSelectedFilter] = useQuickFilter("allsuppliers");

function resetFilter(){
    setSelectedFilter("");
}
function applyFilter(){
    console.log("Saved filter value",selectedFilter)
    setshowDrawer(false);

}
function cancelFilter(){
    setshowDrawer(false);
}
function handleQuickFilterChange(value:string){
    setSelectedFilter(value)
}
function openDrawer(){
    setshowDrawer(true);
}

return(
    <div>
    <Button
    className={classes.applyButton}
    size="large"
    variant="contained"
    onClick={openDrawer}
  >
    Filter
  </Button>
    <FilterDrawerComponent {...{ applyFilter, resetFilter, cancelFilter, showDrawer}}>
    <SupplierFilters handleQuickFilterChange={handleQuickFilterChange} ></SupplierFilters>
   </FilterDrawerComponent>
   </div>

)};

export default RenderDrawer
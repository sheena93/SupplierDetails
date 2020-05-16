import React, { Fragment, useState, useEffect } from 'react';
import { FilterDrawerComponent } from "../Filter/CommonFilterComponent";
import { SupplierFilters,useQuickFilter } from "./SupplierFilters";

const RenderDrawer: React.FC = () => {

const [showDrawer, setshowDrawer] = useState(false); 
// const [applyFilter, setapplyFilter] = useState(false);
const [filterClicked, setFilterClicked] = useState(false);
const [selectedFilter,setSelectedFilter] = useQuickFilter();


function resetFilter(){

}
function applyFilter(){

}
function cancelFilter(){

}
function handleQuickFilterChange(value:string){
    setSelectedFilter(value)
}


return(
    <FilterDrawerComponent applyFilter={applyFilter} resetFilter={resetFilter} cancelFilter={cancelFilter} >
    <SupplierFilters handleQuickFilterChange={handleQuickFilterChange} ></SupplierFilters>
   </FilterDrawerComponent>

)};

export default RenderDrawer
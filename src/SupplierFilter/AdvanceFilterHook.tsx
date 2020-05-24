import React, { useContext, createContext, ReactNode } from "react";
import {
  SupplierInformation,
  ElligibleAp,
  OfferInformation,
  ClearingApr,
  ClearingDpe,
  NonclearingApr,
  NonclearingDpe,
} from "../SupplierFilter/SupplierFilters.schema";
import { useMultiSelectFilter, Statetype,handleChangeType } from "../MultiSelectFilter/index";

type providerprops = AdvanceFiltertype|null

const advanceFilterContext = createContext<providerprops>(null);

export interface Props {
  children: ReactNode;
}

export const ProvideAdavanceFilter: React.FC<Props> = ({ children }) => {
  const auth = useProvideAdvanceFilter();
  return (
    <advanceFilterContext.Provider value={auth}>
      {children}
    </advanceFilterContext.Provider>
  );
};

export const useAdvanceFilterHook = () => {
  return useContext(advanceFilterContext);
};

export interface AdvanceFiltertype{
  // [key:string] : handleChangeType | Statetype
    resetState: ()=>void;
    supplier: Statetype;
    setSupplier: handleChangeType;
    elligibleAp: Statetype;
    setElligibleAp: handleChangeType;
    offerinfo: Statetype;
    setOfferinfor: handleChangeType;
    clearingApr: Statetype;
    setClearingApr: handleChangeType;
    clearingDpe: Statetype;
    setClearingDpe: handleChangeType;
    nonclearingApr: Statetype;
    setNonclearingApr: handleChangeType;
    nonclearingDpe: Statetype;
    setNonclearingDpe: handleChangeType;
}

function useProvideAdvanceFilter() : AdvanceFiltertype {
  const [supplier, setSupplier,resetSupplier]    = useMultiSelectFilter(SupplierInformation);
  const [elligibleAp, setElligibleAp,resetElligibleAp]   = useMultiSelectFilter(ElligibleAp);
  const [offerinfo, setOfferinfor,resetOfferInfo]   = useMultiSelectFilter(OfferInformation);
  const [clearingApr, setClearingApr,resetClearingApr]   = useMultiSelectFilter(ClearingApr);
  const [clearingDpe, setClearingDpe,resetClearingDpe]   = useMultiSelectFilter(ClearingDpe);
  const [nonclearingApr, setNonclearingApr,resetNonClearingApr]   = useMultiSelectFilter(NonclearingApr);
  const [nonclearingDpe, setNonclearingDpe,resetNonClearingDpe]   = useMultiSelectFilter(NonclearingDpe);

  function getCurrentState() {
         
  }
  function resetState() {
    resetSupplier();  
    resetElligibleAp();
    resetOfferInfo();
    resetClearingApr();
    resetClearingDpe();
    resetNonClearingApr();
    resetNonClearingDpe();
  }
  
  return {resetState,supplier, setSupplier,elligibleAp, setElligibleAp,offerinfo, setOfferinfor,clearingApr, setClearingApr,clearingDpe, setClearingDpe,nonclearingApr, setNonclearingApr,nonclearingDpe, setNonclearingDpe}
}

export function withAdvanceFilterProvider(Component:React.FC){

  return ()=> (
    <ProvideAdavanceFilter>
     <Component></Component>
    </ProvideAdavanceFilter>
  )

} 


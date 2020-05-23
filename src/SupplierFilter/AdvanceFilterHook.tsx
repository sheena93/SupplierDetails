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
  const [supplier, setSupplier]    = useMultiSelectFilter(SupplierInformation);
  const [elligibleAp, setElligibleAp]   = useMultiSelectFilter(ElligibleAp);
  const [offerinfo, setOfferinfor]   = useMultiSelectFilter(OfferInformation);
  const [clearingApr, setClearingApr]   = useMultiSelectFilter(ClearingApr);
  const [clearingDpe, setClearingDpe]   = useMultiSelectFilter(ClearingDpe);
  const [nonclearingApr, setNonclearingApr]   = useMultiSelectFilter(NonclearingApr);
  const [nonclearingDpe, setNonclearingDpe]   = useMultiSelectFilter(NonclearingDpe);
  return {supplier, setSupplier,elligibleAp, setElligibleAp,offerinfo, setOfferinfor,clearingApr, setClearingApr,clearingDpe, setClearingDpe,nonclearingApr, setNonclearingApr,nonclearingDpe, setNonclearingDpe}
}

export function withAdvanceFilterProvider(Component:React.FC){

  return ()=> (
    <ProvideAdavanceFilter>
     <Component></Component>
    </ProvideAdavanceFilter>
  )

} 


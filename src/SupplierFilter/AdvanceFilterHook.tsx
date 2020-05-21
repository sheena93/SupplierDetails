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

import { useMultiSelectFilter, Statetype } from "../MultiSelectFilter/index";

type providerprops = {value:Array<Statetype | Function>}
const advanceFilterContext = createContext<providerprops>([]);

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

function useProvideAdvanceFilter() : Array<Statetype | Function>  {
  const [supplier, setSupplier] = useMultiSelectFilter(SupplierInformation);
  const [elligibleAp, setElligibleAp] = useMultiSelectFilter(ElligibleAp);
  const [offerinfo, setOfferinfor] = useMultiSelectFilter(OfferInformation);
  const [clearingApr, setClearingApr] = useMultiSelectFilter(ClearingApr);
  const [clearingDpe, setClearingDpe] = useMultiSelectFilter(ClearingDpe);
  const [nonclearingApr, setNonclearingApr] = useMultiSelectFilter(NonclearingApr);
  const [nonclearingDpe, setNonclearingDpe] = useMultiSelectFilter(NonclearingDpe);
  return [supplier, setSupplier,elligibleAp, setElligibleAp,offerinfo, setOfferinfor,clearingApr, setClearingApr,clearingDpe, setClearingDpe,nonclearingApr, setNonclearingApr,nonclearingDpe, setNonclearingDpe]
}

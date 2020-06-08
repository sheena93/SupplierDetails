import React, { useContext, createContext, ReactNode } from "react";
import {
  SupplierInformation,
  ElligibleAp,
  OfferInformation,
  ClearingApr,
  ClearingDpe,
  NonClearingApr,
  NonClearingDpe,
} from "../SupplierFilter/SupplierFilters.schema";
import {
  useMultiSelectFilter,
  Statetype,
  handleChangeType,
} from "../MultiSelectFilter/MultiFilterWrapper";

type providerprops = AdvanceFiltertype | null;

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

export interface AdvanceFiltertype {
  // [key:string] : handleChangeType | Statetype
  resetState: () => void;
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
  restorePreviousState: () => void;
  applyFilterState: () => previousStateType | null;
}

export interface previousStateType {
  supplier: Statetype;
  elligibleAp: Statetype;
  offerinfo: Statetype;
  clearingApr: Statetype;
  clearingDpe: Statetype;
  nonclearingApr: Statetype;
  nonclearingDpe: Statetype;
}

let previousAdvancedFilterState: previousStateType | null = null;

function useProvideAdvanceFilter(): AdvanceFiltertype {
  const [supplier, setSupplier, resetSupplier] = useMultiSelectFilter(
    SupplierInformation
  );
  const [elligibleAp, setElligibleAp, resetElligibleAp] = useMultiSelectFilter(
    ElligibleAp
  );
  const [offerinfo, setOfferinfor, resetOfferInfo] = useMultiSelectFilter(
    OfferInformation
  );
  const [clearingApr, setClearingApr, resetClearingApr] = useMultiSelectFilter(
    ClearingApr
  );
  const [clearingDpe, setClearingDpe, resetClearingDpe] = useMultiSelectFilter(
    ClearingDpe
  );
  const [
    nonclearingApr,
    setNonclearingApr,
    resetNonClearingApr,
  ] = useMultiSelectFilter(NonClearingApr);
  const [
    nonclearingDpe,
    setNonclearingDpe,
    resetNonClearingDpe,
  ] = useMultiSelectFilter(NonClearingDpe);

  function resetState(previousAdvancedFilterState?: previousStateType | null) {
    resetSupplier(previousAdvancedFilterState?.supplier);
    resetElligibleAp(previousAdvancedFilterState?.elligibleAp);
    resetOfferInfo(previousAdvancedFilterState?.offerinfo);
    resetClearingApr(previousAdvancedFilterState?.clearingApr);
    resetClearingDpe(previousAdvancedFilterState?.clearingDpe);
    resetNonClearingApr(previousAdvancedFilterState?.nonclearingApr);
    resetNonClearingDpe(previousAdvancedFilterState?.nonclearingDpe);
  }

  // function getPrevousState(): previousStateType | null {
  //   return previousAdvancedFilterState;
  // }

  function restorePreviousState() {
    resetState(previousAdvancedFilterState);
  }

  function applyFilterState() {
    previousAdvancedFilterState = {
      supplier,
      elligibleAp,
      offerinfo,
      clearingApr,
      clearingDpe,
      nonclearingApr,
      nonclearingDpe,
    };
    return previousAdvancedFilterState;
  }

  return {
    resetState,
    applyFilterState,
    restorePreviousState,
    supplier,
    setSupplier,
    elligibleAp,
    setElligibleAp,
    offerinfo,
    setOfferinfor,
    clearingApr,
    setClearingApr,
    clearingDpe,
    setClearingDpe,
    nonclearingApr,
    setNonclearingApr,
    nonclearingDpe,
    setNonclearingDpe,
  };
}

export function withAdvanceFilterProvider(Component: React.FC) {
  return () => (
    <ProvideAdavanceFilter>
      <Component></Component>
    </ProvideAdavanceFilter>
  );
}

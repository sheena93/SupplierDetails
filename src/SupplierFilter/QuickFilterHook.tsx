import {useState, useCallback } from "react";

type Hook = (defaultvalue: string) => [string, (value: string) => void];
export const useQuickFilter: Hook = (defaultvalue: string) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(defaultvalue);
  console.log("defaultvalue", defaultvalue);
  const handleQuickFilterChange = useCallback(
    function (value: string) {
      setSelectedFilter(value);
    },
    [selectedFilter]
  );
  return [selectedFilter, handleQuickFilterChange];
};

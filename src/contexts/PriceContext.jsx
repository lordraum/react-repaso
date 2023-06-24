import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const PriceContext = createContext();

export function ProviderPriceContext({ children }) {
  const [periodType, setPeriodType] = useState("month");
  const handleClick = () =>
    setPeriodType(periodType === "month" ? "annual" : "month");
  return (
    <PriceContext.Provider
      value={{
        periodType,
        handleClick,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

import React from "react";
import { useContext } from "react";
import { PriceContext } from "../../../contexts/PriceContext";

const Price_Header = () => {
  const { periodType, handleClick } = useContext(PriceContext);

  return (
    <div>
      <h2>Bienvenido!! Estos son nuestros planes</h2>
      <button onClick={handleClick}>
        {periodType === "month" ? "Mensual" : "Anual"}
      </button>
    </div>
  );
};

export default Price_Header;

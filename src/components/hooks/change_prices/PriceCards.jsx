import React from "react";
import { useContext } from "react";
import { PriceContext } from "../../../contexts/PriceContext";

class Plan {
  constructor(id, name, benefit, price) {
    this.id = id;
    this.name = name;
    this.benefit = benefit;
    this.price = price;
  }
}

const plans = [
  new Plan("1", "Basico", "Lo necesario para ti", 100),
  new Plan("2", "Intermedio", "Incluye herramientas para que mejores", 200),
  new Plan("3", "Avanzado", "Todo los recursos a tu disposición", 300),
];

const PriceCards = () => {
  const { periodType } = useContext(PriceContext);
  return (
    <div className="cards">
      {plans.map((x) => (
        <div key={x.id}>
          <h3>{x.name}</h3>
          <p>{x.benefit}</p>
          <a href="#">{`$ ${
            periodType === "month" ? x.price : x.price * 10
          }`}</a>
        </div>
      ))}
    </div>
  );
};

export default PriceCards;

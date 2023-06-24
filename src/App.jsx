import React from "react";
import MyComponent from "./components/basics/MyComponent";
import Click from "./components/basics/Click";
import TextField from "./components/basics/TextField";
import MyNav from "./components/basics/MyNav";
import Count from "./components/hooks/Count";
import CountImpar from "./components/hooks/CountImpar";
import PriceCards from "./components/hooks/change_prices/PriceCards";
import Price_Header from "./components/hooks/change_prices/Price_Header";
import ValidInput from "./components/hooks/change_prices/ValidInput";
import "./App.css";

const App = () => {
  return (
    <>
      <MyComponent
        title="React Component"
        subtitle="Componente de react con props destructuradas"
      />
      <Click />
      <TextField />
      <MyNav />
      <Count />
      <CountImpar />
      <Price_Header />
      <PriceCards />
      <ValidInput />
    </>
  );
};

export default App;

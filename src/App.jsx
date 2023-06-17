import React from "react";
import MyComponent from "./components/MyComponent";
import Click from "./components/Click";
import TextField from "./components/TextField";
import MyNav from "./components/MyNav";

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
    </>
  );
};

export default App;

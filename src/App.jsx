import React from "react";
import MyComponent from "./components/MyComponent";
import Click from "./components/Click";
import TextField from "./components/TextField";

const App = () => {
  return (
    <>
      <MyComponent
        title="React Component"
        subtitle="Componente de react con props destructuradas"
      />
      <Click />
      <TextField />
    </>
  );
};

export default App;

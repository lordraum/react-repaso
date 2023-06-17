import React from "react";

const MyComponent = ({ titleFragment, subtitle }) => {
  return (
    <>
      {/* <h1>Fragmento de {titleFragment}</h1> */}
      <h1>{`Fragmento de ${titleFragment}`}</h1>

      <h2>{subtitle}</h2>
    </>
  );
};

export default MyComponent;

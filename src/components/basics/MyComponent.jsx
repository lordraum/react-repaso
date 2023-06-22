import React from "react";

const MyComponent = ({ titleFragment, subtitle }) => {
  return (
    <>
      {/* <h1>Fragmento de {titleFragment}</h1> */}
      <h1
        style={{ backgroundColor: "steelblue" }}
      >{`Fragmento de ${titleFragment}`}</h1>

      <h2 className="blue_text">{subtitle}</h2>
    </>
  );
};

export default MyComponent;

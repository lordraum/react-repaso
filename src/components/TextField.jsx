import React from "react";

const handleChange = (e) => console.log(e.target.value);

const TextField = () => {
  return (
    <>
      <label htmlFor="input">Ingresa un texto!!</label>
      <input onChange={handleChange} id="input" type="text" />
    </>
  );
};

export default TextField;

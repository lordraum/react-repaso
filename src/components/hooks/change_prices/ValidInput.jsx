import React, { useRef, useState } from "react";

const ValidInput = () => {
  const inputRef = useRef("");
  const [isValid, setIsValid] = useState(null);
  const clickRef = useRef(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsValid(
      Math.abs(inputRef.current.value) > 0
        ? true
        : inputRef.current.value !== "" && inputRef.current.value !== undefined
        ? false
        : "empty"
    );
    clickRef.current = true;
  };
  return (
    <div>
      <form>
        <label htmlFor="input">Escribe tu número de identidad</label>
        <input autoFocus ref={inputRef} id="input" />
        <button onClick={handleClick}>Enviar</button>
      </form>
      {clickRef.current && (
        <p>{`${
          isValid ? inputRef.current.value : "Debes ingresar un número"
        }`}</p>
      )}
      {isValid === "empty" && <p>Campo requerido</p>}
    </div>
  );
};

export default ValidInput;

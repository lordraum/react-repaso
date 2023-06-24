// useEffect example
import React from "react";
import { useState, useEffect } from "react";

const CountImpar = () => {
  // Declaración del estado count e isImpar utilizando useState
  const [count, setCount] = useState(0);
  const [esImpar, setEsImpar] = useState(false);

  // Función para manejar el clic del botón
  function handleOnClick() {
    // Incrementar el valor de count
    setCount(count + 1);

    // Verificar si count es par o impar y actualizar esImpar en consecuencia
    if (count % 2 === 0) {
      setEsImpar(false);
    } else {
      setEsImpar(true);
    }
  }

  // Efecto para actualizar el título del documento
  useEffect(() => {
    document.title = `Has hecho ${count} clics`;

    // Función de limpieza opcional
    return () => {
      document.title = "React App";
    };
  }, [count]);

  return (
    <div>
      <p>Has hecho {count} clics</p>
      <p>{esImpar ? "Es impar" : "Es par"}</p>
      <button onClick={handleOnClick}>Haz clic</button>
    </div>
  );
};

export default CountImpar;

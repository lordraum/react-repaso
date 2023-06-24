// useState example
import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Haz hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz click</button>
    </div>
  );
};

export default Count;

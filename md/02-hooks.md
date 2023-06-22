# React Hooks

# useState()

`const [estado, setEstado] = useState(valorInicial);`

```jsx
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
```

## useEffect()

Permite ejecutar una instrucción según presente algun cambio en un estado, en el documento, u otros aspectos del componente.
```jsx
useEffect(() => {
    // Hace algo cuando se monta o se actualiza el componente, estado, etc.
    return () => {
    // Hace algo cuando el componente se desmonta o antes de que se vuelva a ejecutar el efecto.
    }
  }, [/* Dependencia */]) // => Valor o variable a observar,  valor por defecto el documento.
```
### Casos de uso
- Realizar un cambio en un estado cuándo este depende de otro.
- Realizar una llamada a una API cuando el componente se monta o se actualiza.
- Suscribirse y cancelar la suscripción a eventos o fuentes de datos externas.
- Actualizar el título de la página en función de cambios en el estado del componente.
- Realizar operaciones de limpieza cuando el componente se desmonta.
- Controlar animaciones o transiciones en función de cambios en el estado del componente.
- Actualizar el documento o el DOM en respuesta a cambios en el estado del componente.
- Gestionar temporizadores o intervalos.
- Realizar operaciones de inicialización o configuración al montar el componente.


<!-- 16 de Junio 2023 -->

# Repaso React - Sintáxis y bases

## Hello World

```jsx
//main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // App.jsx
//import React from "react";

const App = () => {
  return <h1>Hello World</h1>;
};

export default App;
);
```

## Componentes
```jsx
//components/MyComponent.jsx
import React from "react";

const MyComponent = () => {
  return <h1>Soy un componente</h1>;
};

export default MyComponent;

//App.jsx
import React from "react";
import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <>
      <MyComponent />;
    </>
  );
};

export default App;
```

## props

```jsx
// component
const MyComponent = (props) => {
  return <h1>{props.title}</h1>;
};

// app
const App = () => {
  return (
    <>
      <MyComponent title="Componente de React" />
    </>
  );
};
```

### props + destructuring

```jsx
// component
const MyComponent = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

//app
    <MyComponent
        title="Componente de React"
        subtitle="Componente de react con props destructuradas"
    />
```

### Tipos de datos en las props
Se escriben entre paréntesis excepto los strings.

```jsx
<MyComponent
    text="Hola mundo"
    number={42}
    bool={true}
/>
```

### PropTypes
`Pendiente`

### Interpolar strings

```jsx
// formato JSX
<h1>Fragmento de {titleFragment}</h1>
// js template literals
<h1>{`Fragmento de ${titleFragment}`}</h1>
```
## Estilos

### En línea
`style` es un objeto, por esa va entre `{{}}`. propiedades formato camelCase
```jsx
<h1 style={{ backgroundColor: "steelblue" }}
>{`Fragmento de ${titleFragment}`}</h1>
```
### CSS clases
La palabra reservada cambia a `className` => `<h2 className="blue_text">{subtitle}</h2>`

## Componentes basados en clases

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

export default MyComponent;

// Se instancia de igual forma que los componentes funcionales
```

## Eventos
Similar a HTML pero con camelCase, reemplazando los listeners de JS.

```jsx
<button onClick={() => console.log("Haz Hecho Click")}>
    Has Click!!
</button>
```

### Handles
Funciones que manejan los eventos

## key
Le da un valor único a un item de un iterable

```jsx
const navigation = [
  new NavItem(1, "Home"),
  new NavItem(2, "About"),
  new NavItem(3, "Services"),
];

const MyNav = () => {
  return (    
      <nav>
        {navigation.map((x, k) => (
          <ul key={k}>
            <li key={k}>
              <a href="#">{x.item}</a>
            </li>
          </ul>
        ))}
      </nav>    
  );
};
```





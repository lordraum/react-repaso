<!-- 16 de Junio 2023 -->

# Repaso React

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
// Template listerals
<h1>{`Fragmento de ${titleFragment}`}</h1>
```






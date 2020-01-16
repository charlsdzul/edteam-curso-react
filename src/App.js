import React, { Fragment } from "react";
import "./styles/styles.scss";
import Curso from "./Curso";
import Banner from "./Banner";
import Formulario from "./Formulario";

// const App = () => <h1>Hola mundo desde mi archivo App.js</h1> //Es JSX, no html, no string

const App = () => (
  <>
    <Banner />
    <Formulario nombre_formulario="con React.js" />
  </>
);

//Los Curso: puede usarse una funcion que imprima los elementos del array para facilitar
// const cursos = {array de objeto}
// Para leer = cursos.map(cur => <Curso titile={cur.title} />)

export default App;

/*
REGLAS JSX
1) Toda etiqueta html debe cerrarse
2) Los componentes deben devolver un solo elemento
3) Importar y usar Fragment para agrupar 2 elementos o más?
4) Otra forma de Fragment: <> hijo hijo <>
5) img también se cierra
6) class será classNameName
7) for será htmlFor
8) No se puede usar if, else, while
 */

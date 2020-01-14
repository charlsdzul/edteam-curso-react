import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss';
import Curso from './Curso';

// const App = () => <h1>Hola mundo desde mi archivo App.js</h1> //Es JSX, no html, no string


const App = () => (
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTjEX12bdLyWQD5wkFx5Lr0rx2MiIlTObufUBhIlPovLzcQWbp"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">REACT</p>
          <p> Subtítulo del banner</p>
          <a href="#" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3" >
    <Curso title="React Desde cero con EDTEAM"/> 
    <Curso title="React.js Desde cero con EDTEAM"/>
    <Curso />
    <Curso />
  </div>
</>
)

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
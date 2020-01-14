import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';



//Ubicar elemento root, la base de toda la página
const root0 = document.getElementById('root');

//<App /> llamado al componente
ReactDOM.render(<App />, root0);

/*

//CREAR COMPONENTES SIN JSX

//Ubicar elemento root, la base de toda la página
const root = document.getElementById('root');

//React.createElement(componenten, propiedades, hijos);
const elemento = React.createElement('h1',{className: "saludo"},"Hola mundo");

//render(elemento_a_renderizar, lugar_donde_se_inderta)
ReactDOM.render(elemento, root);




//CREAR ELEMENTO CON JSX

//Ubicar elemento root, la base de toda la página
const root2 = document.getElementById('root');

//ReactDOM.render(elemento, root);
ReactDOM.render(<h1 className="saludos">Hola Charls</h1>, root2)


*/
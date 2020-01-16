import React from 'react';
import PropTypes from 'prop-types'; //yarn add prop-types: Libreria para usar Curso.propTypes y Curso.defaultProps

const persona = {"apellido":"dzul", "edad":29};

const mayorDeEdad = edad => edad>18;

const curso = {
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTjEX12bdLyWQD5wkFx5Lr0rx2MiIlTObufUBhIlPovLzcQWbp",
    "price":"50 usd"
}

// const Curso = props => SÍ RECIBE PROPIEDADES. Se leen con "props.propiedad"
// const Curso = ({propiedad, propiedad}) => SÍ RECIBE PROPIEDADES SELECCIONADAS. Se leen con "propiedad"
// const Curso = () =>    NO RECIBE PROPIEDADES

const Curso = ({title,image,nombre,apellido,edad}) => (
 <article className="card">
   {11+11}
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={curso.image} alt="google.com"/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={image} alt={title}/>
            </div>
          </div>
          <span className="small">{nombre + " " + apellido}</span>
          <span className="small"> {mayorDeEdad(edad) ? " Soy mayor de edad" : "Soy menor de edad"}</span>
           {mayorDeEdad(persona.edad) ? <span>Soy mayor de edad!</span> : <span>Soy mayor de edad!</span>}
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">{curso.price}</a>
      </div>
    </div>
  </article>

)



//El tipo de valor que se espera para cada propiedad
Curso.propTypes={
  nombre: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,

}

//Valores default en caso de que el componente no reciba la propiedad
Curso.defaultProps={
  nombre:"No hay nombre",
  apellido:"No hay apellido",
  image:"link_De_imagen",
  title:"No hay titulo"

}

export default Curso;
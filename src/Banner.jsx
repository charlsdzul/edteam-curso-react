import React from "react";

//COMPONENTE TIPO FUNCION
const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTjEX12bdLyWQD5wkFx5Lr0rx2MiIlTObufUBhIlPovLzcQWbp"
        />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">REACT</p>
          <p> Subtítulo del banner</p>
          <a href="#" className="button">
            Botón del banner
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;

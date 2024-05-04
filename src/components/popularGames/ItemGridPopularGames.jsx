import PropTypes from 'prop-types';
import "./ItemGridPopularGames.css";

export const ItemGridPopularGames = ({ texto, nombreIcono, nombreImagen }) => {

  const direccionIcono = "./icons/" + nombreIcono;
  const direccionImagen = "./img/" + nombreImagen;
  const estilosImagenFondo = `linear-gradient(to bottom, #07304e70, #07314eab), url(${direccionImagen})`;

  return (
    <div 
      className={"grid-popular-games__item"} 
      style={{ backgroundImage: estilosImagenFondo }}
    >
      <div className="item__contenedor-interno">
        <div className="contenedor-interno__contenedor-imagen">
          <img src={ direccionIcono } alt="Icono team" />
        </div>
        <p> { texto } </p>
      </div>
    </div>
  )
}

ItemGridPopularGames.propTypes = {
  texto: PropTypes.string,
  nombreIcono: PropTypes.string,
  nombreImagen: PropTypes.string
};
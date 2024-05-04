import { Search } from "./Search";
import "./carousel.css";

export const Carousel = () => {
  return (
    <>
      <div className="contenedor-controles">
        <div className="contenedor-controles-arrow prev-arrow">
          <img src="./icons/arrow.png" alt="leftArrow" />
        </div>
        <div className="contenedor-controles__text">
          <p className="text__texto-complementario">
          The battle for the power of the seas
          </p>
          <p className="text__texto">
          Poseidon
          </p>
        </div>
        <div className="contenedor-controles-arrow next-arrow">
          <img src="./icons/arrow.png" alt="leftArrow" />
        </div>
      </div>
      <Search />
    </>
  )
}

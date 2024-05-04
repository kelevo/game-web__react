import { GeneralButton } from "../button/GeneralButton";
import "./mainPublisherContainer.css";

export const MainPublisherContainer = () => {
  return (
    <div className="contenedor-general-publisher-games">
      <p className="contenedor-general-publisher-games__titulo">
        Publisher stores
      </p>
      <div className="contenedor-general-publisher-games__information">

        <div className="information__section">
          <div className="section__name">
            <img src="./icons/bizzard.png" alt="Bizzard logo" />
            <div className="name__ranquing">
              <p>Blizzard official store</p>
              <div className="ranquing__stars">
                <img src="./icons/starActive.png" alt="star" />
                <img src="./icons/starActive.png" alt="star" />
                <img src="./icons/starActive.png" alt="star" />
                <img src="./icons/starActive.png" alt="star" />
                <img src="./icons/star.png" alt="star" />
              </div>
            </div>
          </div>
          <div className="section__groups">
            <div className="groups__item">
              <div className="item__container-img">
                <img src="./icons/wofw.png" alt="icon group" />
              </div>
              <p>World of Warcraft</p>
            </div>
            <div className="groups__item">
              <div className="item__container-img">
                <img src="./icons/teamFortress.png" alt="icon group" />
              </div>
              <p>Team Fortress</p>
            </div>
            <div className="groups__item">
              <div className="item__container-img">
                <img src="./icons/overwatch.jpg" alt="icon group" />
              </div>
              <p>Overwatch</p>
            </div>
            <div className="groups__item">
              <div className="item__container-img">
                <img src="./icons/heroesStorm.png" alt="icon group" />
              </div>
              <p>Heroes of the storm</p>
            </div>
          </div>
          <GeneralButton texto="Visit blizzard store" color="primary" />
        </div>

        <div className="information__section">
          <span className="section__title-medium">Hot blizzard offers</span>
          <img className="section__image-logo" src="./logos/warlegion.webp" alt="Logo World Warcraft Legion" />
          <div className="section__info-game">
            <span>Expansion Set</span>
            <div className="info-gamee__title">
              <div>
                <span>World of Warcraft</span>
                <img src="./icons/registrado.png" alt="Icono marca registrada" />
                <span>: Legion</span>
              </div>
              <span className="title__register">TM</span>
            </div>
            <span className="info-game__subtitle">Includes Level 100 Character Boost!</span>
          </div>
          <div className="section__price">
            <span>Standart edition</span>
            <div className="price__price">
              <span>C 49.99</span>
              <div className="price__discount">
                -50%
              </div>
            </div>
          </div>
          <div className="section__buttons">
            <GeneralButton texto="Buy now" color="primary" />
            <GeneralButton texto="Read more" color="second" />
          </div>
        </div>


      </div>
    </div>
  )
}

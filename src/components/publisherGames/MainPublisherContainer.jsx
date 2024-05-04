import { GreenButton } from "../greenButton/GreenButton";
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
          <GreenButton texto="Visit blizzard store" />
        </div>




        <div className="information__section">
          
        </div>
      </div>
    </div>
  )
}

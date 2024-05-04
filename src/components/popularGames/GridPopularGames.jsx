import { popularGamesData } from "../../helpers";
import { ItemGridPopularGames } from "./";
import "./gridPopularGames.css";

export const GridPopularGames = () => {
  return (
    <div className="popular-games">
      <div className="popular-games__header">
        <span className="header__title">Popular games</span>
        <span className="header__button">All games</span>
      </div>
      <div className="grid-popular-games">
        {
          popularGamesData.map( ( game, index ) => (
            <ItemGridPopularGames
              key={ index }
              texto={ game.texto }
              nombreIcono={ game.nombreIcono }
              nombreImagen={ game.nombreImagen }
            />
          ))
        }
      </div>
      <div className="popular-games__footer">
        <span className="header__title">Publisher stores</span>
      </div>
    </div>
  )
}

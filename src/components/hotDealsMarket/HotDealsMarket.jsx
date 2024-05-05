import { hotDealsData } from "../../helpers";
import "./hotDealsMarket.css";
import { ItemHotDealsMarket } from "./ItemHotDealsMarket";

export const HotDealsMarket = () => {
  return (
    <div className="contenedor-hot-deal">
      <div className="header__title">
        Hot deals on market today
      </div>
      <div className="grid-hot-deal-market">
        {
          hotDealsData.map( ( game, index ) => (
            <ItemHotDealsMarket key={ index } {...game} />
          ))
        }
      </div>
    </div>
  )
}

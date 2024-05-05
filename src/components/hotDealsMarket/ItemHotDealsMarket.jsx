import { GeneralButton } from "../button/GeneralButton"
import "./itemHotDealMarket.css";

export const ItemHotDealsMarket = ( { title, subtitle, img, background, price, discount, store } ) => {

  return (
    <div className="item-hot-deal" style={{ backgroundImage: `linear-gradient(to bottom, #07304ee8, #07304ee8), url(' /img/${ background } ')` }}>

      <div className="item-hot-deal__header">
        <div className="hot-deal-header__title">
          <span className="title__title"> { title } </span>
          <span className="title__subtitle"> { subtitle } </span>
        </div>
        <img src="./icons/search.png" alt="Search icon" />
      </div>

      <img className="item-hot-deal__image-product" src={ `./icons/${ img }` } alt="" />

      <div className="item-hot-deal__price">
        <div className="price__price-discount">
          <span className="price-discount__price"> { price } </span>
          <span className="price-discount__discount"> - { discount }% </span>
        </div>
        <img src={ `./icons/${ store }` } alt="" />
      </div>

      <GeneralButton color="primary" texto="Buy now" size="m" />

    </div>
  )
}

import PropTypes from 'prop-types';
ItemHotDealsMarket.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired
};

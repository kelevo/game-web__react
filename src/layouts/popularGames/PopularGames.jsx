import "./popularGames.css";
import PropTypes from 'prop-types';

export const PopularGames = ({ children }) => {
  return (
    <div className="layout-popular-games layout-general">
      { children }
    </div>
  )
}

PopularGames.propTypes = {
  children: PropTypes.element
};
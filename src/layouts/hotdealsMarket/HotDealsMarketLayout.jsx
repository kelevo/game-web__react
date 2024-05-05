import PropTypes from 'prop-types';
import "./hotDealsMarket.css";

export const HotDealsMarketLayout = ({ children }) => {
  return (
    <div className="layout-hot-deals-market layout-general">
      { children }
    </div>
  )
}

HotDealsMarketLayout.propTypes = {
  children: PropTypes.element
};
import "./publisherGames.css";
import PropTypes from 'prop-types';

export const PublisherGames = ({ children }) => {
  return (
    <div className="layout-publisher-games">
      { children }
    </div>
  )
}

PublisherGames.propTypes = {
  children: PropTypes.element
};
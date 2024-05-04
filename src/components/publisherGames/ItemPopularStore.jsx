import PropTypes from 'prop-types';
import "./itemPopularStore.css";

export const ItemPopularStore = ( { title, img } ) => {
  return (
    <div className="item-popular">
      <img src={ `logos/${ img }` } alt={ img } />
      <span> { title } </span>
    </div>
  )
}

ItemPopularStore.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};


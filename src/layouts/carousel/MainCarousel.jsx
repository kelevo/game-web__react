import "./mainCarousel.css";
import PropTypes from 'prop-types';

export const MainCarousel = ({ children }) => {

  return (
    <div className="main-carousel layout-general" style={{ backgroundImage: "url(./img/carousel2.jpg)" }}>
      { children }
    </div>
  )
}

MainCarousel.propTypes = {
  children: PropTypes.element.isRequired
};
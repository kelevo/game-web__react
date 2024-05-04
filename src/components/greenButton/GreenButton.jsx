import "./greenButton.css";
import PropTypes from 'prop-types';

export const GreenButton = ({ texto }) => {
  return (
    <div className="green-button">
      { texto }
    </div>
  )
}

GreenButton.propTypes = {
  texto: PropTypes.string,
};

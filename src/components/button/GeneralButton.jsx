import "./generalButton.css";
import PropTypes from 'prop-types';

export const GeneralButton = ({ texto, color }) => {
  return (
    <div className={ `general-button general-button__${ color }` }>
      { texto }
    </div>
  )
}

GeneralButton.propTypes = {
  texto: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

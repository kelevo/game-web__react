import "./generalButton.css";
import PropTypes from 'prop-types';

export const GeneralButton = ({ texto, color, size }) => {

  if ( size === undefined ) { size = "g" }

  return (
    <div className={ `general-button general-button__${ color } general-button__${ size }` }>
      { texto }
    </div>
  )
}

GeneralButton.propTypes = {
  texto: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string
};

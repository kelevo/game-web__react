import "./languajeButton.css";

export const LanguajeButton = () => {
  return (
    <div className="languaje-button">
      <img src="./icons/english-flag.png" className="button__flag" alt="english flag" />
      <p>English</p>
      <img src="./icons/arrow.png" className="button__arrow" alt="arrow down" />
    </div>
  )
}

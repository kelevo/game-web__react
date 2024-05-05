import "./footer.css";

export const Footer = () => {
  return (
    <div className="layout-general footer" >
      <div className="footer__textos">
        <span>Faq</span>
        <span>Help</span>
      </div>
      <span className="footer_copy">Kelevo estudio 2024 - Diseño tomado de internet</span>
      <div className="footer__redes-sociales">
        <img src="./icons/facebook.png" alt="Logo facebook" />
        <img src="./icons/instagram.png" alt="Logo instagram" />
        <img src="./icons/x.png" alt="Logo x" />
      </div>
    </div>
  )
}

import { GeneralButton, LanguajeButton } from "../";
import "./navbar.css";

export const Navbar = () => {

  return (
    <header className="header layout-general">
      <section className="header__section-header-logo-links">
        <img src="./img/logo.svg" alt="Logo pagina" />
        <div className="section-header__links">
          <p>Market</p>
          <p>Inventiry</p>
          <p>Store</p>
          <p>News</p>
        </div>
      </section>
      <section className="header__section-header-buttons">
        <LanguajeButton/>
        <GeneralButton texto={"Sign in | Sign up"} color="primary" size="m" />
      </section>
    </header>
  )
}

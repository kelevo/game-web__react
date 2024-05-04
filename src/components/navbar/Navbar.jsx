import { GreenButton, LanguajeButton } from "../";
import "./navbar.css";

export const Navbar = () => {

  return (
    <header className="header">
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
        <GreenButton texto={"Sign in | Sign up"} />
      </section>
    </header>
  )
}

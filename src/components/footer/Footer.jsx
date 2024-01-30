import style from "./Footer.module.scss";
import Logo from "../../assets/Hancock logo.png";

// HUSK AT LAVE FUNKTIONALITET TIL SIGN UP NEWSLETTER
export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <section>
        <h4>Tilmeld nyhedsbrev</h4>
        <p>Få de seneste nyheder sendt til din indbakke</p>
        <form>
          <input></input>
          <button>Tilmeld</button>
        </form>
        <img src={Logo} alt="Hancock logo" />
      </section>
    </footer>
  );
};

import { Title } from "../../components/Title/Title";
import mapImage from "../../assets/mediesuset-map.jpg";
import mapImage2 from "../../assets/map.PNG";
import style from "./Infopage.module.scss";

export const Infopage = () => {
  return (
    <>
      <Title title={"Praktisk info"} />
      <section className={style.infoContainer}>
        <p>
          På denne side finder du praktisk information om vores festival som
          eks. adresse, åbningstider og kort over festivalpladsen. Skulle du
          have behov for yderligere hjælp er du altid velkommen til at kontakte
          os
        </p>
        <div>
          <h2>Kort over pladsen</h2>
          <img src={mapImage} alt="kort over pladsen"></img>
        </div>

        <div>
          <h2>Lokation</h2>
          <img src={mapImage2} alt="kort over lokationen"></img>
          <p>Addresse: </p>
          <p>Øster uttrup vej 1</p>
          <p>9000 Aalborg</p>
        </div>
      </section>
    </>
  );
};

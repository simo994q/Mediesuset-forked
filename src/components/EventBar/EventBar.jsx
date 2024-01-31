import style from "./EventBar.module.scss";

export const EventBar = ({ setSelectedEvent }) => {
  return (
    <ul className={style.eventBarStyle}>
      <li onClick={() => setSelectedEvent("0")}>A-Å</li>
      <li onClick={() => setSelectedEvent("1")}>RØD SCENE</li>
      <li onClick={() => setSelectedEvent("2")}>BLÅ SCENE</li>
      <li onClick={() => setSelectedEvent("3")}>GRØN SCENE</li>
      <li onClick={() => setSelectedEvent("4")}>LILLA SCENE</li>
    </ul>
  );
};

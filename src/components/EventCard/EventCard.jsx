import style from "../EventCard/EventCard.module.scss";

export const EventCard = ({ image, title, description, date, stageColor, setModal, setInfo }) => {

  const setModalStuff = () => {
    setModal(true)
    setInfo({title: title, description: description, image: image, date: date, scene: stageColor})
  }

  return (
    
    <figure className={style.eventCardStyle} onClick={() => setModalStuff()}>
      <div>
        <img src={image} />
      </div>
      <figcaption style={{ backgroundColor: stageColor }}>
        <p>{title}</p>
        <p>{date}</p>
      </figcaption>
    </figure>
  );
};

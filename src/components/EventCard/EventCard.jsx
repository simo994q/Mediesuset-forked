import style from "../EventCard/EventCard.module.scss";

export const EventCard = ({ image, title, date, stageColor }) => {
  return (
    <figure className={style.eventCardStyle}>
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

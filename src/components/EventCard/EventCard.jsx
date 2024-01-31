import style from "../EventCard/EventCard.module.scss";

export const EventCard = ({ image, title, date }) => {
  return (
    <figure className={style.eventCardStyle}>
      <img src={image} />
      <figcaption>
        <p>{title}</p>
        <p>{date}</p>
      </figcaption>
    </figure>
  );
};

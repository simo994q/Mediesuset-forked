import { EventCard } from "../../components/EventCard/EventCard";
import { useFetch } from "../../hooks/useFetch";
import style from "../Eventpage/Eventpage.module.scss";
export const Eventpage = () => {
  const { data, error } = useFetch(
    "https://api.mediehuset.net/mediesuset/events"
  );

  console.log(data);
  return (
    <section className={style.eventPageWrapper}>
      {data?.items.map((item) => {
        return (
          <EventCard
            title={item.title}
            image={item.image}
            date={item.local_time}
          />
        );
      })}
    </section>
  );
};

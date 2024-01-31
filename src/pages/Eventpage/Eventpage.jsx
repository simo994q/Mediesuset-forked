import { useState } from "react";
import { EventBar } from "../../components/EventBar/EventBar";
import { EventCard } from "../../components/EventCard/EventCard";
import { Title } from "../../components/Title/Title";
import { getDayFromDate } from "../../helpers/getDayFromDate";
import { getEventColor } from "../../helpers/getEventColor";
import { useFetch } from "../../hooks/useFetch";
import style from "../Eventpage/Eventpage.module.scss";
import EventModal from "../../components/EventModal/EventModal";

export const Eventpage = () => {
  const events = useFetch("https://api.mediehuset.net/mediesuset/events");
  const [selectedEvent, setSelectedEvent] = useState("0");

  console.log(selectedEvent);
  const daysInWeek = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [eventInfo, setEventInfo] = useState('poop')

  console.log(events);

  return (
    <>
      <Title title={"Events"} />
      <EventBar setSelectedEvent={setSelectedEvent} />
      <EventModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} eventInfo={eventInfo} />
      <section className={style.eventPageWrapper}>
        {events ? (
          events?.items.map((item) => {
            if (item.stage_id === selectedEvent || selectedEvent === "0")
              return (
                <EventCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  date={`${
                    daysInWeek[getDayFromDate(item.local_time)]
                  } kl. ${item.local_time.substring(11, 16)}`}
                  stageColor={getEventColor(item.stage_id)}
                  setModal={setIsModalOpen}
                  setInfo={setEventInfo}
                />
              );
          })
        ) : (
          <h3>Could not load events - try again</h3>
        )}
      </section>
    </>
  );
};

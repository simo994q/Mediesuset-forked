import { useState } from "react";
import { NewsCard } from "../components/NewsCard/NewsCard";
import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch";
import style from "./Frontpage.module.scss";
import { Modal } from "../components/Modal/Modal";

export const Frontpage = () => {
  const { data, error } = useFetch(
    "https://api.mediehuset.net/mediesuset/news"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    // Hvis modal er åben er den true og sættes til false
    // Hvis modal er lukket er den false og sættes til true
    setIsModalOpen(!isModalOpen);
  };

  console.log("data", data);
  //console.log("error", error);
  return (
    <>
      <Title title="Nyheder" />
      <section className={style.newsCardWrapper}>
        {data?.items?.map((item) => {
          return (
            <NewsCard
              title={item.title}
              text={item.teaser}
              imgSrc={item.image}
              handleModal={handleModal}
            />
          );
        })}
      </section>
      <Modal handleModal={handleModal} isModalOpen={isModalOpen} />
    </>
  );
};

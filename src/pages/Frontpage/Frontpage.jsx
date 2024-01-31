import { useEffect, useState } from "react";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { Title } from "../../components/Title/Title";
import { Modal } from "../../components/Modal/Modal";
import style from "./Frontpage.module.scss";

export const Frontpage = () => {
  // Modal state (open/closed)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // States for setting data
  const [newsDetails, setNewsDetails] = useState();
  const [news, setNews] = useState();
  // State for selecting ID on news article
  const [selectedID, setSelectedID] = useState();

  // Handler func to set selected ID and open/close modal
  const handleModal = (id) => {
    if (id) {
      setSelectedID(id);
    }
    setIsModalOpen(!isModalOpen);
  };

  // Effect to fetch all news on component mount
  useEffect(() => {
    let url = `https://api.mediehuset.net/mediesuset/news`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);

  // Effect to re-fetch selected news when selected ID changes
  useEffect(() => {
    if (selectedID) {
      let url = `https://api.mediehuset.net/mediesuset/news/${selectedID}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setNewsDetails(data))
        .catch((err) => console.error(err));
    }
  }, [selectedID]);

  return (
    <>
      <Title title="Nyheder" />
      <section className={style.newsCardWrapper}>
        {news?.items?.map((item) => {
          return (
            <NewsCard
              key={item.id}
              title={item.title}
              text={item.teaser}
              imgSrc={item.image}
              handleModal={() => handleModal(item.id)}
            />
          );
        })}
      </section>
      <Modal handleModal={() => handleModal(null)} isModalOpen={isModalOpen}>
        <figure className={style.newsDetailsWrapper}>
          <img src={newsDetails?.item.image} />
          <figcaption>
            <h4>{newsDetails?.item.title}</h4>
            <p>{newsDetails?.item.teaser}</p>
            <p>{newsDetails?.item.author}</p>
          </figcaption>
          <p>{new Date(newsDetails?.item.datetime * 1000).toString()}</p>
        </figure>
      </Modal>
    </>
  );
};

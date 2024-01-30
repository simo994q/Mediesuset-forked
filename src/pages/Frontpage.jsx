import { NewsCard } from "../components/NewsCard/NewsCard";
import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch";
import style from "./Frontpage.module.scss";

export const Frontpage = () => {
  const { data, error } = useFetch(
    "https://api.mediehuset.net/mediesuset/news"
  );

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
            />
          );
        })}
      </section>
    </>
  );
};

export const NewsCard = ({ imgSrc, title, text }) => {
  return (
    <div>
      <img src={imgSrc}></img>
      <section>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>Læs mere</button>
      </section>
    </div>
  );
};

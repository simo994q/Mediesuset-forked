import style from "./Title.module.scss";

export const Title = ({ title }) => {
  return <h2 className={style.titleStyle}>{title}</h2>;
};

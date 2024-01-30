import { useEffect, useState } from "react";
import style from "./Hero.module.scss";
export const Hero = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let url = "https://api.mediehuset.net/mediesuset/images";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  console.log("images: ", images);

  return (
    images && (
      <div
        style={{ backgroundImage: `url(${images.items[4]?.image})` }}
        className={style.heroStyle}
      ></div>
    )
  );
};

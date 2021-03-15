import s from "../styles/Hero.module.scss";
import { IHero } from "../types";
import { Header, Brands } from "./";
import Image from "next/image";

export default function Hero({
  heroContent,
  headerContent,
  brandsContent,
}: IHero) {
  const { heading, lead, button, image } = heroContent;
  return (
    <div className={s.wrapper}>
      <Header headerContent={headerContent} />
      <svg className={s.circle_purple} height="740" width="740">
        <circle cx="370" cy="370" r="370" />
      </svg>
      <svg className={s.circle_orange} height="72" width="72">
        <circle cx="36" cy="36" r="36" />
      </svg>
      <svg className={s.circle_green} height="72" width="72">
        <circle cx="36" cy="36" r="36" />
      </svg>
      <div className={s.content}>
        <div className={s.left}>
          <h1>{heading}</h1>
          <p>{lead}</p>
          <a href={button.url}>
            <button className={s.cta}>{button.label}</button>
          </a>
        </div>
        <div className={s.image_container}>
          <Image
            height={387}
            width={518}
            layout="responsive"
            src={image.url}
            alt={image.alt}
            className={s.image}
          />
        </div>
      </div>
      <Brands brandsContent={brandsContent} />
    </div>
  );
}

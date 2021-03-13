import s from "../styles/Hero.module.scss";
import { Header, Brands } from "./";

export default function Hero({ heroContent, headerContent, brandsContent }) {
  const { heading, lead, button, image } = heroContent;
  return (
    <div className={s.hero_container}>
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
      <div className={s.hero_content}>
        <div className={s.hero_cta}>
          <h1>{heading}</h1>
          <p className={s.lead}>{lead}</p>
          <a href={button.url}>
            <button className={s.cta}>{button.label}</button>
          </a>
        </div>
        <img src={image.url} alt={image.alt} className={s.hero_image} />
      </div>
      <Brands brandsContent={brandsContent} />
    </div>
  );
}

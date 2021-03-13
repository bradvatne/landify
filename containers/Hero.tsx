import styles from "../styles/Hero.module.scss";
import { Header, Brands } from "./";

export default function Hero({ heroContent, headerContent, brandsContent }) {
  return (
    <div className={styles.hero_container}>
      <Header headerContent={headerContent} />
      <svg className={styles.circle_purple} height="740" width="740">
        <circle cx="370" cy="370" r="370" />
      </svg>
      <svg className={styles.circle_orange} height="72" width="72">
        <circle cx="36" cy="36" r="36" />
      </svg>
      <svg className={styles.circle_green} height="72" width="72">
        <circle cx="36" cy="36" r="36" />
      </svg>
      <div className={styles.hero_content}>
        <div className={styles.hero_cta}>
          <h1>{heroContent.heading}</h1>
          <p className={styles.lead}>{heroContent.lead}</p>
          <a href={heroContent.button.url}>
            <button className={styles.cta}>{heroContent.button.label}</button>
          </a>
        </div>
        <img
          src={heroContent.image.url}
          alt={heroContent.image.alt}
          className={styles.hero_image}
        />
      </div>
      <Brands brandsContent={brandsContent} />
    </div>
  );
}

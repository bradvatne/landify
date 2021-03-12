import styles from "../styles/Hero.module.scss";
import { Header } from "./";

export default function Hero({ content, headerContent }) {
  return (
    <div className={styles.hero_container}>
      <Header content={headerContent} />
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
          <h1>Landing page UI kit</h1>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
          <button className={styles.cta}>Get started</button>
        </div>
      </div>
      <div/>
    </div>
  );
}

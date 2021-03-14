import { link } from "node:fs";
import s from "../styles/FeatureLeft.module.scss";

export default function FeatureLeft({ featureLeftContent }) {
  const { image, title, lead, a } = featureLeftContent;
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <img src={image} />
      </div>
      <div className={s.right}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.lead}>{lead}</p>
        <a className={s.link} href={a.url}>
          {a.label}<img className={s.arrow} src='/images/right-arrow.svg'/>
        </a>
      </div>
    </div>
  );
}

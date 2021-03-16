import { link } from "node:fs";
import s from "../styles/FeatureLeft.module.scss";
import Image from 'next/image';

export default function FeatureLeft({ featureLeftContent }) {
  const { image, title, lead, a } = featureLeftContent;
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <Image width={420} height={499} alt="Phone Mockup" src={image} />
      </div>
      <div className={s.right}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.lead}>{lead}</p>
        <a href='#' className={s.link}>
          <div className={s.arrow}>
          {a.label}<Image width={24} height={30} alt="Arrow right" src='/images/right-arrow.svg'/>
          </div>
        </a>
      </div>
    </div>
  );
}

import s from "../styles/FeatureCenter.module.scss";
import Image from "next/image";

export default function FeatureCenter({ featureCenterContent }) {
  const { title, lead, image } = featureCenterContent;
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <h3 className={s.title}>{title}</h3>
      </div>
      <div className={s.right}>
        <p className={s.lead}>{lead}</p>
      </div>
      <div className={s.image}>
        <Image
          alt="Stylish Lightbulbs"
          height={400}
          width={1000}
          layout="responsive"
          src={image}
          className={s.img}
        />
      </div>
    </div>
  );
}

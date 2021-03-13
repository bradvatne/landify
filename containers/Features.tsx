import s from "../styles/Features.module.scss";
import { IFeatures } from "../types";

export default function Features({ featuresContent }: IFeatures) {
  const { title, lead, features } = featuresContent;
  return (
    <div className={s.features_wrapper}>
      <div className={s.grid}>
        <div className={s.title_container}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.lead}>{lead}</p>
        </div>
        {features.map((feature, index) => (
          <div className={s.feature} key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.lead}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

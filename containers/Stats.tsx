import s from "../styles/Stats.module.scss";
import Image from "next/image";

export default function Stats({ statsContent }) {
  const { title, lead, stats } = statsContent;
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.lead}>{lead}</p>
      </div>
      <div className={s.right}>
        {stats.map((stat, index) => (
          <div key={index} className={s.stat}>
            <div className={s.icon}>
              <Image height={32} width={32} src={stat.icon} alt={stat.lead} />
            </div>
            <div className={s.text}>
              <h3 className={s.stat_title}>{stat.title}</h3>
              <p className={s.stat_lead}>{stat.lead}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

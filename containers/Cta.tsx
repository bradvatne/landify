import s from "../styles/Cta.module.scss";

export default function Cta({ ctaContent }) {
  const { title, lead, cta, images } = ctaContent;
  return (
    <div className={s.section}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.lead}>{lead}</p>
          <p className={s.cta}>{cta}</p>
          <div className={s.cta_buttons}>
            <img src="/images/google_cta.svg" />
            <img src="/images/apple_cta.svg" />
          </div>
        </div>
        <div className={s.right}>
            <img className={s.phone_left} src="/images/phone_left.png"/>
            <img className={s.phone_right} src="/images/phone_right.png"/>
        </div>
      </div>
    </div>
  );
}

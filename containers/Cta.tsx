import s from "../styles/Cta.module.scss";
import Image from "next/image";

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
            <Image width={135} height={40} src="/images/google_cta.svg" />
            <Image width={135} height={40} src="/images/apple_cta.svg" />
          </div>
        </div>
        <div className={s.right}>
          <div className={s.phone_left}>
          <Image
            alt="Phone Mockup"
            width={232}
            height={371}
            src="/images/phone_left.png"
          />
          </div>
          <div className={s.phone_right}>
          <Image
            alt="Phone Mockup"
            width={232}
            height={403}
            src="/images/phone_right.png"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

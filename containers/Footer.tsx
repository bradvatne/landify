import s from "../styles/Footer.module.scss";
import Image from 'next/image';

export default function Footer({ footerContent }) {
  const {
    logo,
    download,
    liscence,
    nav,
    copyright,
    cta,
    google,
    apple,
  } = footerContent;
  return (
    <div className={s.section}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <Image width={32} height={32} alt="Landify Logo" src={logo} />
          <p className={s.download}>
            <a href={download.link}>{download.label}</a>
            <a href={liscence.link}>{liscence.label}</a>
          </p>
          <div className={s.nav}>
            {nav.map((item, index) => (
              <a key={index} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
          <p className={s.copyright}>{copyright}</p>
        </div>
        <div className={s.right}>
          <p>{cta}</p>
          <a href={google}>
            <Image width={135} height={40} alt="Google Play Store" src="/images/google_cta.svg" />
          </a>
          <a href={apple}>
            <Image width={135} height={40} alt="Apple App Store" src="/images/apple_cta.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

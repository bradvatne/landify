import s from "../styles/Footer.module.scss";

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
          <img alt="Logo" src={logo} />
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
          <a>{cta}</a>
          <a href={google}>
            <img alt="Google Play Store" src="/images/google_cta.svg" />
          </a>
          <a href={apple}>
            <img alt="Apple App Store" src="/images/apple_cta.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

import s from "../styles/Nav.module.scss";

export default function Header({ headerContent }) {
  const { menu_links, nav_logo, social_links } = headerContent;
  return (
    <div className={s.nav_wrapper}>
      <nav className={s.nav}>
        <ul className={s.menu_links}>
          {menu_links.map((link, index) => (
            <li key={index} className={s.menu_link_item}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="/" className={s.nav_logo_container}>
          <img alt={nav_logo.alt} src={nav_logo.image} />
        </a>
        <div className={s.social_links}>
          {social_links.map((link, index) => (
            <a href={link.url} key={index}>
              <img alt={link.brand} src={link.icon} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

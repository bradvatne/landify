import styles from "../styles/Nav.module.scss";

export default function Header({ headerContent }) {
  return (
    <div className={styles.nav_wrapper}>
    <nav className={styles.nav}>
      <ul className={styles.menu_links}>
        {headerContent.menu_links.map((item, index) => (
          <li key={index} className={styles.menu_link_item}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
      <a href="/" className={styles.nav_logo_container}>
        <img
          alt={headerContent.nav_logo.alt}
          src={headerContent.nav_logo.image}
        />
      </a>
      <div className={styles.social_links}>
        {headerContent.social_links.map((item, index) => (
          <a href={item.url} key={index}>
            <img alt={item.brand} src={item.icon} />
          </a>
        ))}
      </div>
    </nav>
    </div>
  );
}

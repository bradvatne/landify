import s from "../styles/Nav.module.scss";
import Image from "next/image";
import { IHeader } from "../types";
import { useState } from "react";

export default function Header({ headerContent }: IHeader) {
  const { menu_links, nav_logo, social_links } = headerContent;
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  function getNavVisibility() {
    if (showNav) {
      return { display: "none" };
    } else return {};
  }

  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <ul
          style={showNav ? { display: "flex" } : { flexBasis: "33%" }}
          className={s.menu_links}
        >
          {menu_links.map((link, index) => (
            <li key={index} className={s.menu_link_item}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="/" className={s.logo_container}>
          <img alt={nav_logo.alt} src={nav_logo.image} />
        </a>
        <div className={s.social_links}>
          {social_links.map((link, index) => (
            <a href={link.url} key={index}>
              <img alt={link.brand} src={link.icon} />
            </a>
          ))}
        </div>
        <button
          className={s.toggle_nav}
          aria-label="Open Navigation"
          onClick={() => toggleNav()}
        >
          <Image width={14} height={8} src="/images/chevron-down.svg" />
        </button>
      </nav>
    </div>
  );
}

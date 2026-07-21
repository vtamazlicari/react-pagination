import { NavLink } from "react-router";
import styles from "./navbar.module.scss";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink;

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
      <ul>
        <li>
          <NavLink to="/" end className={linkClass}>
            APPS DISCOVERY
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory" className={linkClass}>
            APPS INVENTORY
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={linkClass}>
            SETTINGS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

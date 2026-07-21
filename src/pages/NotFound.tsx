import { Link } from "react-router";
import styles from "./Home/home.module.scss";

function NotFound() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h1 className={styles.status}>404</h1>
        <p className={styles.status}>Page not found.</p>
        <Link to="/" className={styles.status}>
          Go home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

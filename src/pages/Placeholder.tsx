import { Link } from "react-router";
import styles from "./Home/home.module.scss";

function Placeholder({ title }: { title: string }) {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h1 className={styles.status}>{title}</h1>
        <p className={styles.status}>This page is not implemented yet.</p>
        <Link to="/" className={styles.status}>
          Go home
        </Link>
      </div>
    </div>
  );
}

export function InventoryPage() {
  return <Placeholder title="Apps Inventory" />;
}

export function SettingsPage() {
  return <Placeholder title="Settings" />;
}

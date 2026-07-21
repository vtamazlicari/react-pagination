import type { Application } from "../../../api/applications";
import { memo } from "react";
import styles from "./applicationItem.module.scss";

const ApplicationItem = memo(function ApplicationItem({
  application,
}: {
  application: Application;
}) {
  const sources = application.appSources ?? [];

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.icon}></div>
        <p>{application.appName}</p>
      </div>

      <div className={styles.col}>
        <p>{application.category}</p>
      </div>

      <div className={styles.col}>
        <p>{sources.join(", ")}</p>
      </div>
    </div>
  );
});

export default ApplicationItem;

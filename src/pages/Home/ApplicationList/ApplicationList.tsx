import { memo } from "react";
import type { Application } from "../../../api/applications";
import ApplicationItem from "../ApplicationItem/ApplicationItem";
import styles from "./applicationList.module.scss";

const ApplicationList = memo(function ApplicationList({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <div className={styles.applicationList}>
      {applications.map((application) => (
        <ApplicationItem key={application.appId} application={application} />
      ))}
    </div>
  );
});

export default ApplicationList;

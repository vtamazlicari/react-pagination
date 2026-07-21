import styles from "./applicationItem.module.scss";

const ListHeader = () => {
  return (
    <div className={styles.row + " " + styles.header}>
      <div className={styles.col}>
        <p>Name</p>
      </div>

      <div className={styles.col}>
        <p>Category</p>
      </div>

      <div className={styles.col}>
        <p>Connection</p>
      </div>
    </div>
  );
}

export default ListHeader;
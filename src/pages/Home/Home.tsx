import type { PageSize } from "../../api/applications";
import styles from "./home.module.scss";
import ApplicationList from "./ApplicationList/ApplicationList";
import Paginator from "./Paginator/Paginator";
import { useApplicationsList } from "../../hooks/useApplicationsList";
import { useCallback, useState, useTransition } from "react";
import { Filter } from "./Filter/Filter";
import ListHeader from "./ApplicationItem/ListHeader";

function Home() {
  const [, startTransition] = useTransition();
  const [appName, setAppName] = useState("");
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState<PageSize>(25);
  const { applications, totalPages, isLoading, isFetching, error } =
    useApplicationsList({ pageNumber, pageSize, appName, category });

  const handleAppNameChange = useCallback((value: string) => {
    startTransition(() => {
      setAppName(value);
      setPageNumber(1);
    });
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    startTransition(() => {
      setCategory(value);
      setPageNumber(1);
    });
  }, []);

  const handlePageSizeChange = useCallback((size: PageSize) => {
    startTransition(() => {
      setPageSize(size);
      setPageNumber(1);
    });
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.scrollableContainer}>
          <ListHeader />
          {error && (
            <div className={styles.statusError}>Error: {error.message}</div>
          )}
          {isLoading && <div className={styles.status}>Loading...</div>}
          {!isLoading && !error && applications.length === 0 && (
            <div className={styles.status}>No applications found.</div>
          )}
          {!isLoading && applications.length > 0 && (
            <ApplicationList applications={applications} />
          )}
        </div>
        <Paginator
          pageNumber={pageNumber}
          pageSize={pageSize}
          totalPages={totalPages}
          isFetching={isFetching}
          onPageChange={setPageNumber}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>

      <div className={styles.filters}>
        <div className={styles.header}>Filters</div>
        <Filter placeholder="Name filter" handleChange={handleAppNameChange} />
        <Filter
          placeholder="Category filter"
          handleChange={handleCategoryChange}
        />
      </div>
    </div>
  );
}

export default Home;

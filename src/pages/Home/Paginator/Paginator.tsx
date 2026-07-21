import { memo } from "react";
import styles from "./paginator.module.scss";
import type { PageSize } from "../../../api/applications";
import { PaginationLimitSelector } from "../PaginationLimitSelector/PaginationLimitSelector";

type PaginatorProps = {
  pageNumber: number;
  pageSize: PageSize;
  totalPages: number;
  isFetching: boolean;
  onPageChange: (pageNumber: number) => void;
  onPageSizeChange: (pageSize: PageSize) => void;
};

const Paginator = memo(function Paginator({
  pageNumber,
  pageSize,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: PaginatorProps) {
  const handlePrev = () => {
    if (pageNumber <= 1) return;
    onPageChange(pageNumber - 1);
  };

  const handleNext = () => {
    if (pageNumber >= totalPages) return;
    onPageChange(pageNumber + 1);
  };

  return (
    <div className={styles.paginator}>
      <PaginationLimitSelector
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
      />
      <button type="button" onClick={handlePrev} disabled={pageNumber <= 1}>
        Prev
      </button>
      <span>
        {totalPages === 0 ? "0 / 0" : `${pageNumber} / ${totalPages}`}
      </span>
      <button
        type="button"
        onClick={handleNext}
        disabled={totalPages === 0 || pageNumber >= totalPages}
      >
        Next
      </button>
    </div>
  );
});

export default Paginator;

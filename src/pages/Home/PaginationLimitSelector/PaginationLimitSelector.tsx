import { memo } from "react";
import type { PageSize } from "../../../api/applications";
import styles from "./paginationLimitSelector.module.scss";

const pageSizes: PageSize[] = [25, 50];

type PaginationLimitSelectorProps = {
  pageSize: PageSize;
  onPageSizeChange: (pageSize: PageSize) => void;
};

export const PaginationLimitSelector = memo(function PaginationLimitSelector({
  pageSize,
  onPageSizeChange,
}: PaginationLimitSelectorProps) {
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange(Number(e.target.value) as PageSize);
  };

  return (
    <select
      className={styles.paginationLimitSelector}
      value={pageSize}
      onChange={handlePageSizeChange}
    >
      {pageSizes.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  );
});

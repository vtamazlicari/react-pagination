import { memo, useEffect, useRef, useState } from "react";
import styles from "./filter.module.scss";

type FilterProps = {
  placeholder: string;
  handleChange: (value: string) => void;
};

export const Filter = memo(function Filter({
  placeholder,
  handleChange,
}: FilterProps) {
  const [value, setValue] = useState("");
  const isFirstRender = useRef(true);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      handleChange(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, handleChange]);

  return (
    <input
      className={styles.filter}
      type="text"
      onInput={handleInput}
      value={value}
      placeholder={placeholder}
    />
  );
});

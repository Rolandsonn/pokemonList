import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ pageCount, handlePrev, handleNext, page }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={handlePrev} className={styles.btn}>
          prev
        </button>
        <span>
          {page} /{pageCount}
        </span>
        <button onClick={handleNext} className={styles.btn}>
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;

import React from "react";

import styles from "./ToastShelf.module.css";

function ToastShelf({ children }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      <li className={styles.toastWrapper}>{children}</li>
    </ol>
  );
}

export default ToastShelf;

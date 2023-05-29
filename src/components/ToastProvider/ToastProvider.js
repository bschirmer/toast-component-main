import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message, variant },
    ]);
  }

  function closeToast(id) {
    const filteredToasts = toasts.filter((t) => t.id !== id);
    setToasts(filteredToasts);
  }

  function closeAllToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, closeToast, closeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

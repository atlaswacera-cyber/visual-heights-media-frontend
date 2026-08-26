import { useEffect } from "react";
import "./LoginModal.css";

function LoginModal({ onClose, onLogin }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  function handleSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  return (
    <div className="login-modal" role="presentation" onMouseDown={onClose}>
      <div
        className="login-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="login-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close login dialog"
        >
          ×
        </button>
        <p className="login-modal__eyebrow">Stage 1 Demo</p>
        <h2 className="login-modal__title" id="login-modal-title">
          Sign in to save inspiration
        </h2>
        <p className="login-modal__text">
          This frontend-only demo stores your saved inspiration in this browser.
          No account credentials are collected.
        </p>
        <form onSubmit={handleSubmit}>
          <button className="login-modal__submit" type="submit">
            Continue as demo client
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

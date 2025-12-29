import React from "react";
import { useNavigate } from "react-router-dom";
function FallbackUi({ error, onRetry }) {
  const navigation = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="card shadow-sm border-0"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div className="card-body text-center p-4">
          <div className="mb-3">
            <span className="fs-1 text-danger">⚠️</span>
          </div>

          <h5 className="card-title fw-bold text-danger">
            Something went wrong
          </h5>

          <p className="card-text text-muted mt-2">
            The application ran into an unexpected error. Please try again.
          </p>

          {error && (
            <div
              className="alert alert-danger small mt-3 text-start"
              role="alert"
            >
              {error.message}
            </div>
          )}

          <div className="d-grid gap-2 mt-4">
            <button
              className="btn btn-danger"
              onClick={onRetry || (() => window.location.reload())}
            >
              Reload Page
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={() => navigation(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FallbackUi;

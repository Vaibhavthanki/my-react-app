import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import FallbackUi from "./FallbackUi";

export const ErrorBoundaryWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <ErrorBoundary
      resetKeys={[location.key]}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <FallbackUi error={error} onRetry={resetErrorBoundary} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

"use client";

import { createContext, useContext, useState, useCallback } from "react";
import FullPageLoader from "@/components/ui/Loader";

const LoaderContext = createContext({
  isLoading: false,
  showLoader: () => {},
  hideLoader: () => {},
});

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && <FullPageLoader />}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}

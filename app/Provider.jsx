"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ThemeProvider } from "@/components/theme-provider";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
}

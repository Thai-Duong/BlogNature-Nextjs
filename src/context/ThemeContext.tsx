"use client";
import { createContext, useState } from "react";

type ContextType = {
  theme: "light" | "dark";
  toggle: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "dark",
  toggle: () => {},
});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggle = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

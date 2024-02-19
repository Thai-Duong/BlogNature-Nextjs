"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function ThemeProvider({ children }: any) {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
}

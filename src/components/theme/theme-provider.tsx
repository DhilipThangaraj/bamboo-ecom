import React, { useEffect, ReactNode } from "react";
import { useThemeStore } from "@/store/use-theme-store";

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = ({ children }: ThemeContextProps) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return <>{children}</>;
};

export default ThemeContext;

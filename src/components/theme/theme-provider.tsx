import { useThemeStore } from "@/store/use-theme-store";
import React, { useEffect, ReactNode } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = ({ children }: ThemeContextProps) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Dynamically set the theme class on the root element
    document.documentElement.className = theme;
  }, [theme]);

  return <>{children}</>;
};

export default ThemeContext;

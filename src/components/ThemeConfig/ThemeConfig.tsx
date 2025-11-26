import React, { createContext, ReactNode, useContext, useState, useCallback } from "react";
import { defaultTheme } from './styles/index'
import { createTheme, ThemeMode, ThemeOptions } from './styles/themes/default'
export type Theme = typeof defaultTheme;
interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  applyTheme: (options?: ThemeOptions) => void;//项目整个主题变化
}
const ThemeContext = createContext<ThemeContextValue | null>(null);
const warnNoProvider = () => {
  if (__DEV__) {
    console.warn('ThemeProvider没有应用～');
  }
};
const defaultContextValue: ThemeContextValue = {
  theme: defaultTheme,
  setTheme: warnNoProvider,
  applyTheme: warnNoProvider,
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const applyTheme = useCallback(
    (options?: ThemeOptions) => {
      setTheme(createTheme(options));
    },
    []
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    return defaultContextValue;
  }
  return context;
};

export { defaultTheme as theme };
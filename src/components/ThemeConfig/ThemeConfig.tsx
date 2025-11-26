import { createContext, ReactNode, useContext, useState } from "react";
import defaultTheme from "./styles/defaultTheme";
export type Theme = typeof defaultTheme;
interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const warnNoProvider = () => {
  if (__DEV__) {
    console.warn('ThemeProvider没有应用～');
  }
};
const defaultContextValue = {
  theme: defaultTheme,
  setTheme: warnNoProvider,
};
const ThemeContext = createContext<ThemeContextValue | null>(null);
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) return defaultContextValue
  return context
}
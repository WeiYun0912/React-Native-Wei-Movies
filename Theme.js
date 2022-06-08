import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children, theme, setTheme }) => (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);

export { ThemeContext, ThemeProvider };

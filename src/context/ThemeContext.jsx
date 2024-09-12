import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000'
  },
  dark: {
    background: '#000000',
    color: '#ffffff'
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); 
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

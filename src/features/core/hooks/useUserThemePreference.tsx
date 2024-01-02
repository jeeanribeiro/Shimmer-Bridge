import React from 'react';

import * as Palettes from '@/core/colorPalettes';
import {baseTheme} from '@/core/theme';
import {createTheme, ThemeProvider} from '@/core/ui/system';

const STORE_KEY = 'theme-preference';

export const THEMES = {
  'Bloom Dark': createTheme({...baseTheme, palette: Palettes.bloomDarkPalette}),
  'Bloom Light': createTheme({...baseTheme, palette: Palettes.bloomLightPalette}),
};

type ThemeName = keyof typeof THEMES;
const DEFAULT = Object.keys(THEMES)[1] as ThemeName;

export const UserThemePreferenceProvider = ({children}: {children: React.ReactNode}) => {
  const [userThemePreference, setUserThemePreference] = React.useState<ThemeName>(DEFAULT);

  React.useEffect(() => {
    const storedValue = localStorage.getItem(STORE_KEY);
    if (storedValue) {
      try {
        setUserThemePreference(JSON.parse(storedValue));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const theme = THEMES[userThemePreference];
  const contextValue = React.useMemo(
    () => ({
      userThemePreference,
      changeUserThemePreference: (themeName: ThemeName) => {
        setUserThemePreference(themeName);
        localStorage.setItem(STORE_KEY, JSON.stringify(themeName));
      },
    }),
    [userThemePreference],
  );

  return (
    <UserThemePreferenceContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserThemePreferenceContext.Provider>
  );
};

export const UserThemePreferenceContext = React.createContext({
  userThemePreference: DEFAULT,
  changeUserThemePreference: (themeName: ThemeName) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(themeName));
  },
});

export const useUserThemePreference = () => {
  return React.useContext(UserThemePreferenceContext);
};

type ThemeMode = 'light' | 'dark';

interface ThemeOptions {
  mode?: ThemeMode;
  tokens?: Record<string, any>;
}

const primaryTheme ={
  '$primary-color':'#fb5f21ff'
}

const componentsTheme: Record<string, any> = {
  '$popup-border-radius': 10,
  '$overlay-bg-color': 'rgba(0, 0, 0, 0.7)',
};
const baseTheme: Record<
  ThemeMode,
  any
> = {
  light: {
    ...primaryTheme,
    ...componentsTheme,
    '$background-color': '#fff',
  },
  dark: {
    ...primaryTheme,
    ...componentsTheme,
    '$background-color': '#111111',
  },
};

export const createTheme = (
  options: ThemeOptions = {},
) => {
  const {
    mode = 'light',
    tokens = {},
  } = options;
  const base = baseTheme[mode];
  return {
    ...base,
    ...tokens,
    '$theme-mode': mode
  };
};
const defaultTheme = createTheme();
export default defaultTheme;
export type { ThemeMode, ThemeOptions };
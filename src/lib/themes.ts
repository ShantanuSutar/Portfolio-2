export const themeStorageKey = "shantanu-portfolio-theme";

export const themes = [
  {
    id: "original",
    name: "Original",
    description: "Charcoal & Amber",
    background: "#111517",
    accent: "#D3A36F",
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Deep Blue & Cyan",
    background: "#12273A",
    accent: "#76D6DF",
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Navy & Lavender",
    background: "#151B32",
    accent: "#B5A7F2",
  },
  {
    id: "daylight",
    name: "Daylight",
    description: "Warm Light",
    background: "#F7F6F2",
    accent: "#276D79",
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const defaultTheme: ThemeId = "original";

export function isThemeId(value: string | null): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

export const themeInitializationScript = `
  (() => {
    const key = ${JSON.stringify(themeStorageKey)};
    const themes = ${JSON.stringify(themes.map((theme) => theme.id))};
    let theme = ${JSON.stringify(defaultTheme)};

    try {
      const storedTheme = window.localStorage.getItem(key);
      if (storedTheme && themes.includes(storedTheme)) theme = storedTheme;
    } catch {}

    document.documentElement.dataset.theme = theme;
  })();
`;

export const dark = {
  background: "#121212",
  text: "#2e2e2e",
};
export const light = {
  background: "#b12626aa",
  text: "#000000",
};
type Theme = {
  background: typeof dark.background | typeof light.background;
  text: typeof dark.text | typeof light.text;
};
export interface CustomThemeProps {
  theme?: Theme;
}

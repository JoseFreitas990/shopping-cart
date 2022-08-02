import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "../../../app/hooks";

import { CustomThemeProps, dark, light } from "./theme";
import { getTheme, ThemeEnum } from "./themeSlice";

const StyledThemeContainer = styled.div<CustomThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  transition: all 0.2s ease;
`;

const { DARK, LIGHT } = ThemeEnum;
export const ThemeManager = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector(getTheme);

  const providedTheme = () => {
    if (theme === DARK) {
      return dark;
    }
    if (theme === LIGHT) {
      return light;
    }
  };
  return (
    <ThemeProvider theme={providedTheme}>
      <StyledThemeContainer>{children}</StyledThemeContainer>
    </ThemeProvider>
  );
};

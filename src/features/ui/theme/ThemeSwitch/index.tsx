import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getTheme, setTheme, ThemeEnum } from "../themeSlice";
import {
  StyledSwitchWrapper,
  StyledThemeContainer,
  StyledToggleText,
} from "./styles";

const { LIGHT, DARK } = ThemeEnum;

export const ThemeSwitch = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  return (
    <StyledThemeContainer>
      <StyledSwitchWrapper>
        <StyledToggleText>Dark mode</StyledToggleText>

        <button
          onClick={() => dispatch(setTheme(theme === DARK ? LIGHT : DARK))}
        >
          hey
        </button>
      </StyledSwitchWrapper>
    </StyledThemeContainer>
  );
};

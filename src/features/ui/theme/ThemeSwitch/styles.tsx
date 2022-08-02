import styled from "styled-components";
import { CustomThemeProps } from "../theme";

export const StyledThemeContainer = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 30px 0;
`;
export const StyledSwitchWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  background-color: aliceblue;
`;
export const StyledToggleText = styled.h2<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  font-size: 20px;
`;

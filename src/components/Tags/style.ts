import styled from "styled-components";
import { Props } from ".";
import { colors } from "../../style";

export const TagContainer = styled.div<Props>`
  color: ${colors.white};
  background-color: ${colors.pink};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  text-align: center;
`;
